import jsurl from 'jsurl';
import {Component} from 'panel';
import rison from 'rison';

import {registerMPElement} from  '../../util/register-element.js';
import {extend} from '../../util';
import template from './index.jade';
import css from './index.styl';

import {
  funnelsQueryToUrlParams,
  insightsQueryToUrlParams,
  retentionQueryToUrlParams,
} from './utils';

export default registerMPElement(`mp-smart-hub-alert`, class extends Component {
  get config() {
    return {
      css,
      template,
      useShadowDom: true,
      defaultState: {
        projectId: null,
        accessToken: null,
        displayContext: null,
        isLink: false,
        alert: null,
        alertId: null,
        groupedAlertId: null,
        permalink: null,
        type: null,
        isRead: false,
        isAlertOwner: false,
        hasSentFeedback: false,
        isMarkedUseful: false,
        message: ``,
        ingestedTimeStr: ``,
      },
      helpers: {
        handleClickAlert: ev => {
          // Don't propagate any clicks on the alert, since custom events are fired for different interactions
          ev.stopPropagation();
        },
        handleMarkUsefulness: (ev, isMarkedUseful) => {
          ev.preventDefault();
          ev.stopPropagation();
          this.fetch(`PATCH`, {
            is_useful: isMarkedUseful, // eslint-disable-line camelcase
            display_context: this.state.displayContext, // eslint-disable-line camelcase
          });
          // TODO(mack): Animation when marked useful, and second screen for marked unuseful
          this.update({hasSentFeedback: true, isMarkedUseful});
          this.dispatchEvent(new CustomEvent(`markedUsefulness`, {
            detail: {
              alertId: this.state.alertId,
              groupedAlertId: this.state.groupedAlertId,
              isMarkedUseful,
            },
          }));
        },
        handleClickLink: ev => {
          ev.stopPropagation();
          this.dispatchEvent(new CustomEvent(`clickedLink`));
        },
        handleRemoveAlert: ev => {
          ev.preventDefault();
          ev.stopPropagation();
          if (this.state.displayContext !== `VISUALIZED`) {
            this.fetch(`DELETE`);
          }
          this.dispatchEvent(new CustomEvent(`removedAlert`, {
            detail: {
              alertId: this.state.alertId,
              groupedAlertId: this.state.groupedAlertId,
            },
          }));
        },
      },
    };
  }

  generateTimeStr(timestampMs) {
    const currentTimestamp = new Date().getTime();
    const timestampDiff = currentTimestamp - timestampMs;
    // TODO(mack): Use moment.js
    if (timestampDiff < 86400000) {
      const units = Math.floor(timestampDiff / 3600000);
      return units === 1 ? `${units} hour ago` : `${units} hours ago`;
    } else {
      const units = Math.floor(timestampDiff / 86400000);
      return units === 1 ? `${units} day ago` : `${units} days ago`;
    }
  }

  generatePermalink(alerts) {
    let firstAlert = alerts[0];
    const projectUrl = `/report/${this.state.projectId}`;
    const alertIds = alerts.map(alert => alert.alertId);

    if (firstAlert.insightsQuery) {
      const urlParams = extend(insightsQueryToUrlParams(firstAlert.insightsQuery), {
        smartHub: {alertIds},
      });
      return `${projectUrl}/insights/#${jsurl.stringify(urlParams)}`;
    } else if (firstAlert.funnelsQuery) {
      const funnelsQuery = firstAlert.funnelsQuery;
      // TODO(mack): Consider having startStepIdx be part of the funnelsQuery
      // TODO(mack): Support isOverallConversion
      const startStepIdx = firstAlert.anomaly.funnelsDetails.startStepIdx;
      const urlParams = extend(funnelsQueryToUrlParams(funnelsQuery), {
        smart_hub: {alert_ids: alertIds}, // eslint-disable-line camelcase
        event_index: startStepIdx + 1, // eslint-disable-line camelcase
      });
      const urlHash = rison.encode(urlParams);
      return `${projectUrl}/funnels/#view/${funnelsQuery.bookmarkId}/${urlHash.substring(1, urlHash.length - 1)}`;
    } else if (firstAlert.retentionQuery) {
      const urlParams = extend(retentionQueryToUrlParams(firstAlert.retentionQuery), {
        smart_hub: {alert_ids: alertIds}, // eslint-disable-line camelcase
      });
      const urlHash = rison.encode(urlParams);
      return `${projectUrl}/retention/#${urlHash.substring(1, urlHash.length - 1)}`;
    }
  }

  updateAlertState() {
    const smartHubAlert = this.state.smartHubAlert;
    if (!smartHubAlert) {
      return;
    }

    const isLink = this.state.displayContext !== `VISUALIZED`;
    let alertId, alertMetadata, groupedAlertId, permalink;
    if (smartHubAlert.alert) {
      const alert = smartHubAlert.alert;
      alertMetadata = alert.alertMetadata;
      alertId = alert.alertId;
      if (isLink) {
        permalink = this.generatePermalink([alert]);
      }
    } else {
      const groupedAlert = smartHubAlert.groupedAlert;
      alertMetadata = groupedAlert.alertMetadata;
      groupedAlertId = groupedAlert.groupedAlertId;
      if (isLink) {
        permalink = this.generatePermalink(groupedAlert.alerts);
      }
    }

    this.update({
      smartHubAlert,
      alertId,
      groupedAlertId,
      permalink,
      alertType: alertMetadata.type,
      isRead: smartHubAlert.isRead,
      isMarkedUseful: !!alertMetadata.markedUsefulAtMs,
      isAlertOwner: alertMetadata.isAlertOwner,
      message: alertMetadata.message,
      ingestedTimeStr: this.generateTimeStr(Number(alertMetadata.ingestedAtMs)),
    });
  }

  attributeChangedCallback(name, oldValue, value) {
    super.attributeChangedCallback(...arguments);
    if (name === `smart-hub-alert`) {
      this.update({smartHubAlert: this.getJSONAttribute(name)});
    } else if (name === `project-id`) {
      this.update({projectId: Number(value)});
    } else if (name === `access-token`) {
      this.update({accessToken: value});
    } else if (name === `display-context`) {
      this.update({displayContext: value});
    }
    this.updateAlertState();
  }

  fetch(method, body=null) {
    const smartHubAlert = this.state.smartHubAlert;
    let url = `/api/app/projects/${this.state.projectId}/smart-hub`;
    if (smartHubAlert.groupedAlert) {
      url = `${url}/grouped-alerts/${smartHubAlert.groupedAlert.groupedAlertId}`;
    } else {
      url = `${url}/alerts/${smartHubAlert.alert.alertId}`;
    }
    return fetch(url, {
      headers: {Authorization: `Bearer ${this.state.accessToken}`},
      method,
      body: body ? JSON.stringify(body) : null,
    })
      .then(response => (response.ok || response.body) ? response.json() : Promise.reject(response.statusText));
  }
});

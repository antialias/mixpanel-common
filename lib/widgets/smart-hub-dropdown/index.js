import {Component} from 'panel';
import queryString from 'query-string';
import throttle from 'lodash/throttle';
import uniqBy from 'lodash/uniqBy';

import {sorted} from '../../util/array';
import {registerMPElement} from  '../../util/register-element.js';
import template from './index.jade';
import css from './index.styl';

const REQUEST_LIMIT = 5;

export default registerMPElement(`mp-smart-hub-dropdown`, class extends Component {
  get config() {
    return {
      css,
      template,
      useShadowDom: true,
      defaultState: {
        open: false,
        smartHubAlerts: [],
      },
      helpers: {
        fetchAlertsIfNeeded: () => this.fetchAlertsIfNeeded(),
        handleClearAllAlerts: () => {
          this.update({smartHubAlerts: []});
          this.clearAllAlerts();
          this.dispatchEvent(new CustomEvent(`clearedAllAlerts`));
        },
        handleDropMenuChange: e => {
          const state = e.detail.state;
          if (![`open`, `closed`].includes(state)) {
            return;
          }
          const open = e.detail.state === `open`;
          this.setAttribute(`open`, open);
        },
        handleClickedLink: () => {
          this.update({open: false});
        },
        handleMarkedUsefulness: e => {
          if (!e.detail.isMarkedUseful) {
            this.animateRemoveAlert(e);
          }
        },
        handleRemovedAlert: e => {
          this.animateRemoveAlert(e);
        },
        insertedDeletedAlert: (el, smartHubAlert) => {
          smartHubAlert.removeAlertHandler = () => this.removeAlert(el, smartHubAlert);
          el.addEventListener(`transitionend`, smartHubAlert.removeAlertHandler);
          el.style.height = 0;
        },
      },
    };
  }

  animateRemoveAlert(e) {
    const smartHubAlert = this.state.smartHubAlerts.find(alert => {
      if (e.detail.alertId) {
        return alert.alert && alert.alert.alertId === e.detail.alertId;
      } else {
        return alert.groupedAlert && alert.groupedAlert.groupedAlertId === e.detail.groupedAlertId;
      }
    });
    smartHubAlert.isDeleted = true;
    smartHubAlert.height = e.target.getBoundingClientRect().height;
    this.update();
  }

  removeAlert(el, smartHubAlert) {
    el.removeEventListener(`transitionend`, smartHubAlert.removeAlertHandler);
    const smartHubAlerts = this.state.smartHubAlerts.filter(alert => {
      if (smartHubAlert.alert) {
        return !alert.alert || alert.alert.alertId !== smartHubAlert.alert.alertId;
      } else {
        return !alert.groupedAlert || alert.groupedAlert.groupedAlertId !== smartHubAlert.groupedAlert.groupedAlertId;
      }
    });
    this.update({smartHubAlerts});
  }

  attachedCallback() {
    super.attachedCallback(...arguments);
    // TODO(mack): Check if it's necessary to do this in both attachedCallback and attributeChangedCallback
    // bootstrap the widget's state from attributes
    this.update({
      open: this.isAttributeEnabled(`open`),
    });

    this.fetchAlertsIfNeeded = throttle(() => {
      const containerEl = this.el.querySelector(`.mp-sh-alerts-container`);
      const alertEl = containerEl.querySelector(`mp-smart-hub-alert:last-of-type`);
      if (!alertEl) {
        return;
      }

      const containerElBottom = containerEl.getBoundingClientRect().bottom;
      const alertElTop = alertEl.getBoundingClientRect().top;
      if (alertEl && containerElBottom - alertElTop > 20) {
        this.fetchAlerts();
      }
    }, 100);

    // For marking as read, and clear all, only affect alerts older than the current time.
    // Also, alerts that are marked as read more recently than the current time should continue
    // to be shown as unread.
    this.attachedAtMs = (new Date()).getTime();

    this.fetchAlerts();
  }

  attributeChangedCallback(name) {
    super.attributeChangedCallback(...arguments);
    if (name === `open`) {
      // TODO(mack): Improve how open/close is handled.
      const open = this.isAttributeEnabled(`open`);
      if (open) {
        this.markAlertsRead();
      }
      this.dispatchEvent(new CustomEvent(`change`, {detail: {open}}));
      this.update({open});
    }
  }

  clearAllAlerts() {
    this.hasClearedAllAlerts = true;
    this.fetch(
      `DELETE`,
      {max_inclusive_ms: this.attachedAtMs} // eslint-disable-line camelcase
    );
  }

  markAlertsRead() {
    this.fetch(
      `PATCH`,
      {max_inclusive_ms: this.attachedAtMs}, // eslint-disable-line camelcase
      {is_read: true} // eslint-disable-line camelcase
    );
  }

  fetchAlerts() {
    if (this.pendingGetRequest || this.allAlertsFetched || this.hasClearedAllAlerts) {
      return;
    }
    const queryParams = {};
    queryParams.limit = REQUEST_LIMIT;
    if (this.minIngestedAtMs) {
      // eslint-disable-next-line camelcase
      queryParams.max_exclusive_ms = this.minIngestedAtMs;
    }

    this.pendingGetRequest = this.fetch(`GET`, queryParams);
    if (!this.pendingGetRequest) {
      return;
    }

    this.pendingGetRequest
      .then(smartHubAlerts => {
        this.pendingGetRequest = null;
        if (!smartHubAlerts.length || this.hasClearedAllAlerts) {
          this.allAlertsFetched = true;
        } else {
          this.appendSmartHubAlerts(smartHubAlerts);
        }
      });
  }

  getAlertMetadata(smartHubAlert) {
    if (smartHubAlert.groupedAlert) {
      return smartHubAlert.groupedAlert.alertMetadata;
    } else {
      return smartHubAlert.alert.alertMetadata;
    }
  }

  appendSmartHubAlerts(smartHubAlerts) {
    smartHubAlerts = uniqBy(this.state.smartHubAlerts.concat(smartHubAlerts), smartHubAlert => {
      if (smartHubAlert.groupedAlert) {
        return `grouped:${smartHubAlert.groupedAlert.groupedAlertId}`;
      } else {
        return `single:${smartHubAlert.alert.alertContentId}`;
      }
    });

    smartHubAlerts = sorted(smartHubAlerts, {
      order: `desc`,
      transform: smartHubAlert => this.getAlertMetadata(smartHubAlert).ingestedAtMs,
    });

    smartHubAlerts.forEach(smartHubAlert => {
      const alertMetadata = this.getAlertMetadata(smartHubAlert);
      smartHubAlert.isRead = !!alertMetadata.readAtMs && Number(alertMetadata.readAtMs) < this.attachedAtMs;
    });

    if (smartHubAlerts) {
      this.minIngestedAtMs = this.getAlertMetadata(smartHubAlerts[smartHubAlerts.length - 1]).ingestedAtMs;
    }

    this.update({smartHubAlerts});
  }

  fetch(method, query={}, body=null) {
    const accessToken = this.getAttribute(`access-token`);
    const projectId = Number(this.getAttribute(`project-id`));
    if (!accessToken || !projectId) {
      return null;
    }

    const url = `/api/app/projects/${projectId}/smart-hub/alerts?${queryString.stringify(query)}`;
    return fetch(url, {
      headers: {Authorization: `Bearer ${accessToken}`},
      method,
      body: body ? JSON.stringify(body) : null,
    })
      .then(response => {
        if (response.ok) {
          return response.json().then(resp => resp.results);
        } else {
          return Promise.reject(response.statusText);
        }
      });
  }
});

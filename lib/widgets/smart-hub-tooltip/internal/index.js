import {Component} from 'panel';
import {registerMPElement} from  '../../../util/register-element.js';
import template from './index.jade';
import css from './index.styl';

export default registerMPElement(`mp-smart-hub-tooltip-internal`, class extends Component {
  get config() {
    return {
      css,
      template,
      useShadowDom: true,
      defaultState: {
        alert: null,
        placement: `top`,
        accessToken: null,
        projectId: null,
      },
      helpers: {
        handleEventPropagation: ev => {
          ev.stopPropagation();
          this.dispatchEvent(new CustomEvent(ev.type, ev));
        },
      },
    };
  }

  attributeChangedCallback(name, oldValue, value) {
    super.attributeChangedCallback(...arguments);
    if (name === `alert`) {
      this.update({alert: this.getJSONAttribute(name)});
    } else if (name === `placement`) {
      this.update({placement: value});
    } else if (name === `access-token`) {
      this.update({accessToken: value});
    } else if (name === `project-id`) {
      this.update({projectId: value});
    }
  }
});

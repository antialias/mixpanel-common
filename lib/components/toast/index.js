import {Component} from 'panel';

import {registerMPElement} from  '../../util/register-element.js';
import timing from '../../stylesheets/mixins/timing.json.js';

import template from './index.jade';

import css from './index.styl';

export default registerMPElement(`mp-toast`, class extends Component {
  get config() {
    return {
      css,
      template,
      useShadowDom: true,
      defaultState: {
        delayRemove: timing[`mp-fast`],
      },
      helpers: {
        ctaClick: () => this._triggerAction(),
        closeClick: () => this._triggerClose(),
      },
    };
  }

  _triggerAction() {
    this.dispatchEvent(new CustomEvent(`action`));
  }

  _triggerClose() {
    this.dispatchEvent(new CustomEvent(`close`));
  }

  attachedCallback() {
    super.attachedCallback();
    this.addEventListener(`action`, e => {
      if (!e.defaultPrevented) {
        this._triggerClose();
      }
    }, true);
  }

});

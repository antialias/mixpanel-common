import {Component} from 'panel';

import css from './index.styl';
import template from './index.jade';

document.registerElement(`mp-drawer`, class extends Component {
  get config() {
    return {
      css,
      template,
      useShadowDom: true,

      defaultState: {
        delayRemove: 250, // TODO replace with var once in common
        placement: ``,
      },

      helpers: {
        close: () => this.dispatchEvent(new CustomEvent(`close`)),
      },
    };
  }

  attachedCallback() {
    if (this.initialized) {
      return;
    }

    if (!this.initialized) {
      super.attachedCallback(...arguments);
    }
  }

  attributeChangedCallback() {
    super.attributeChangedCallback(...arguments);

    Array.from(document.querySelectorAll(`body, html`))
      .forEach(el => {
        el.style.overflow = this.isAttributeEnabled(`hide`) ? `` : `hidden`;
      });

    this.update({placement: this.getAttribute(`placement`) || `right`});
  }
});

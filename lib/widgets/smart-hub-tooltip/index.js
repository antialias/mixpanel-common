import {Component} from 'panel';
import {registerMPElement} from  '../../util/register-element.js';
import template from './index.jade';
import './internal';

export default registerMPElement(`mp-smart-hub-tooltip`, class extends Component {
  get config() {
    return {
      template,
      useShadowDom: true,
      defaultState: {
        offsetLeft: null,
        offsetTop: null,
      },
    };
  }

  createdCallback() {
    super.createdCallback(...arguments);
    this.tooltipEl = document.createElement(`mp-smart-hub-tooltip-internal`);

    this._handleEventPropagation = ev => {
      ev.stopPropagation();
      this.dispatchEvent(new CustomEvent(ev.type, ev));
    };
    this.tooltipEl.addEventListener(`click`, this._handleEventPropagation);
    this.tooltipEl.addEventListener(`removedAlert`, this._handleEventPropagation);
    this.tooltipEl.addEventListener(`sentFeedback`, this._handleEventPropagation);
  }

  attachedCallback() {
    super.attachedCallback(...arguments);
    document.body.appendChild(this.tooltipEl);
    this._updateTooltip();
  }

  _updateTooltip() {
    if (!this.initialized) {
      return;
    }

    const placement = this.getAttribute(`placement`);
    if (!this.getAttribute(`offset-left`) || !this.getAttribute(`offset-top`)) {
      console.error(`Missing required arg offset-left/top`);
    }

    this.tooltipEl.style.visibility = `hidden`;
    this.tooltipEl.style.position = `absolute`;

    window.requestAnimationFrame(() => {
      const tooltipElRect = this.tooltipEl.getBoundingClientRect();
      const offsetLeft = Number(this.getAttribute(`offset-left`));
      const offsetTop = Number(this.getAttribute(`offset-top`));
      this.tooltipEl.style.left = `${offsetLeft - tooltipElRect.width/2}px`;
      if (placement === `top`) {
        this.tooltipEl.style.top = `${offsetTop - tooltipElRect.height}px`;
      } else if (placement === `bottom`) {
        this.tooltipEl.style.top = `${offsetTop}px`;
      } else {
        console.error(`Unsupported placement: ${placement}`);
      }
      this.tooltipEl.style.visibility = `visible`;
    });
  }

  detachedCallback() {
    document.body.removeChild(this.tooltipEl);
    this.tooltipEl.removeEventListener(`click`, this._handleEventPropagation);
    this.tooltipEl.removeEventListener(`removedAlert`, this._handleEventPropagation);
    this.tooltipEl.removeEventListener(`sentFeedback`, this._handleEventPropagation);
    super.detachedCallback(...arguments);
  }

  attributeChangedCallback(name, oldValue, value) {
    super.attributeChangedCallback(...arguments);
    if ([`alert`, `placement`].includes(name)) {
      this.tooltipEl.setAttribute(name, value);
    }
    this._updateTooltip();
  }
});

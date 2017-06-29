import {Component} from 'panel';
import {registerMPElement} from  '../../util/register-element.js';
import template from './index.jade';
import css from './index.styl';
import './internal';

export default registerMPElement(`mp-smart-hub-tooltip`, class extends Component {
  get config() {
    return {
      css,
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
    this.tooltipEl.addEventListener(`removedAlert`, this._handleEventPropagation);
    this.tooltipEl.addEventListener(`markedUsefulness`, this._handleEventPropagation);
  }

  attachedCallback() {
    super.attachedCallback(...arguments);
    this._updateTooltip();
  }

  set parentEl(parentEl) {
    this._parentEl = parentEl;
    this._parentEl.appendChild(this.tooltipEl);
  }

  set placementElRect(placementElRect) {
    // For highcharts, the placementEl is the anomaly icon point on the chart. However, when highcharts is redrawn,
    // the actual point element can change. Thus the placementEl will be stale. So, instead get the bounding rect
    // of the placementEl right when it's set.
    // TODO(mack): Find cleaner way to do this.
    this._placementElRect = placementElRect;
  }

  _updateTooltip() {
    if (!this.initialized) {
      return;
    }

    if (!this._parentEl || !this._placementElRect) {
      console.error(`Missing required parentEl and/or placementElRect`);
      return;
    }

    const placement = this.getAttribute(`placement`);
    this.tooltipEl.style.position = `absolute`;

    window.requestAnimationFrame(() => {
      const parentElRect = this._parentEl.getBoundingClientRect();
      const placementElRect = this._placementElRect;
      const tooltipElRect = this.tooltipEl.getBoundingClientRect();

      const offsetTop = placementElRect.top - parentElRect.top;
      const offsetLeft = placementElRect.left - parentElRect.left;

      this.tooltipEl.style.left = `${offsetLeft + placementElRect.width / 2 - tooltipElRect.width / 2}px`;

      if (placement === `top`) {
        this.tooltipEl.style.top = `${offsetTop - tooltipElRect.height}px`;
      } else if (placement === `bottom`) {
        this.tooltipEl.style.top = `${offsetTop + placementElRect.height}px`;
      } else {
        console.error(`Unsupported placement: ${placement}`);
      }
      this.tooltipEl.style.visibility = `visible`;
    });
  }

  detachedCallback() {
    this._parentEl.removeChild(this.tooltipEl);
    this.tooltipEl.removeEventListener(`removedAlert`, this._handleEventPropagation);
    this.tooltipEl.removeEventListener(`markedUsefulness`, this._handleEventPropagation);
    super.detachedCallback(...arguments);
  }

  attributeChangedCallback(name, oldValue, value) {
    super.attributeChangedCallback(...arguments);
    if ([`access-token`, `project-id`, `alert`, `placement`].includes(name)) {
      this.tooltipEl.setAttribute(name, value);
    }
  }
});

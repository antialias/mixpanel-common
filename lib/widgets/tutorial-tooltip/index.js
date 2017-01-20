import { Component } from 'panel';
import { registerMPElement } from  '../../util/register-element.js';
import template from './index.jade';
import css from './index.styl';

registerMPElement(`mp-tutorial-tooltip`, class extends Component {
  get config() {
    return {
      css,
      template,
      useShadowDom: true,
      defaultState: {
        placement: `top`,
        numSteps: 0,
        currStep: 0,
      },
      helpers: {
        getSteps: () => [...Array(this.state.numSteps).keys()],
      },
    };
  }

  attributeChangedCallback() {
    super.attributeChangedCallback(...arguments);

    let update = {};
    const placement = this.getAttribute(`placement`);
    const numSteps = parseInt(this.getAttribute(`num-steps`));
    const currStep = parseInt(this.getAttribute(`curr-step`));

    if (placement) {
      update.placement = placement;
    }
    if (Number.isInteger(numSteps)) {
      update.numSteps = numSteps;
    }
    if (Number.isInteger(currStep)) {
      update.currStep = currStep;
    }

    this.update(update);
  }
});
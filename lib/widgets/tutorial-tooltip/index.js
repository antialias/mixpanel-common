import {Component} from 'panel';
import {registerMPElement} from  '../../util/register-element.js';
import timing from '../../stylesheets/mixins/timing.json.js';
import template from './index.jade';
import css from './index.styl';

export default registerMPElement(`mp-tutorial-tooltip`, class extends Component {
  get config() {
    return {
      css,
      template,
      useShadowDom: true,
      defaultState: {
        numSteps: 0,
        currStep: 0,
        delayRemove: timing[`mp-slow`],
      },
      helpers: {
        close: e => {
          e.stopPropagation();
          this.dispatchEvent(new CustomEvent(`close`));
        },
        next: e => {
          e.stopPropagation();
          this.dispatchEvent(new CustomEvent(`next`));
        },
        getSteps: () => [...Array(this.state.numSteps).keys()],
      },
    };
  }

  attributeChangedCallback() {
    super.attributeChangedCallback(...arguments);

    let update = {};
    const numSteps = parseInt(this.getAttribute(`num-steps`));
    const currStep = parseInt(this.getAttribute(`curr-step`));

    if (Number.isInteger(numSteps)) {
      update.numSteps = numSteps;
    }
    if (Number.isInteger(currStep)) {
      update.currStep = currStep;
    }

    this.update(update);
  }
});

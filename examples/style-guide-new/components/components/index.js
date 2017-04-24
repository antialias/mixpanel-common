import { Component } from 'panel';

import template from './index.jade';
import './index.styl';

document.registerElement('components-section', class extends Component {
  get config() {
    return {
      helpers: {
        sectionChange: e => {
          this.update({sectionFilter: e.currentTarget.dataset.filterName});
        },
      },
      template,
    };
  }
});
import {Component} from 'panel';

import template from './index.jade';
import './index.styl';

document.registerElement(`nav-bar`, class extends Component {
  get config() {
    return {
      template,
      helpers: {
        navSectionChange: e => {
          let sectionOpen = e.currentTarget.dataset.sectionName;
          if (sectionOpen === this.state.sectionOpen) {
            sectionOpen = null;
          }
          window.scrollTo(0, 0);
          this.update({sectionOpen});
        },
        jumpToNavigate: section => {
          window.location.hash = section;
        },
      },
    };
  }
});

import 'babel-polyfill';

import 'webcomponents.js/webcomponents';

import { Component } from 'panel';

import '../../build/index';
import COLORS from '../../build/stylesheets/mixins/colors.json';
import { SVG_ICONS } from '../../build/components/svg-icon';

import './components/nav-bar';
import './components/colors';
import './components/typography';
import './components/iconography';
import './components/buttons';
import './components/components';
import './components/widgets';

import template from './index.jade';
import './index.styl';

document.registerElement('style-guide', class extends Component {
  get config() {
    return {
      defaultState: {
        COLORS,
        SVG_ICONS,
        sectionOpen: 'widgets',
        subSectionOpen: null,
        sectionFilter: null,
        open: {
          alert: true,
          confirm: false,
          dropMenu: false,
          modal: false,
          tagSelector: true,
          tutorialTooltip: {
            top: true,
          },
          upsell: true,
        },
      },
      helpers: {
        navSectionChange: e => {
          let navSectionOpen = e.currentTarget.dataset.sectionName;
          if (navSectionOpen === this.state.navSectionOpen) {
            navSectionOpen = null;
          }
          this.update({navSectionOpen});
        }
      },
      template,
    };
  }
});

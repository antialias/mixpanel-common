import {TYPE_FORMAT_NAME} from '../constants';
import ShowClause from './show-clause';
import GroupClause from './group-clause';
import FilterClause from './filter-clause';
import TimeClause from './time-clause';
import {debug} from 'mixpanel-common/report/util';
import extend from 'lodash/fp/extend';

export default class Clause {
  constructor(attrs={}) {
    this.dataset = attrs.dataset;
  }

  static create(sectionType, attrs, syncCustomEvent=null) {
    switch (sectionType) {
      case `show`: return new ShowClause(attrs, syncCustomEvent);
      case `group`: return new GroupClause(attrs);
      case `filter`: return new FilterClause(attrs);
      case `time`: return new TimeClause(attrs);
    }
  }

  get attrs() {
    const {dataset} = this;
    return {dataset};
  }

  extend(attrs) {
    return this.validate(Clause.create(this.TYPE, extend(this.attrs, attrs)));
  }

  formattedType() {
    return TYPE_FORMAT_NAME[this.TYPE];
  }

  serialize() {
    return this.attrs;
  }

  toUrlData() {
    return this.attrs;
  }

  get valid() {
    return true;
  }

  validate(newClause) {
    const valid = newClause.valid;

    if (!valid) {
      debug.warn(`${this.TYPE} clause invalid:`, newClause);
    }

    return newClause;
  }
}
Clause.RESOURCE_TYPE_ALL = Clause.prototype.RESOURCE_TYPES = `all`;
Clause.RESOURCE_TYPE_EVENTS = Clause.prototype.RESOURCE_TYPES = `events`;
Clause.RESOURCE_TYPE_PEOPLE = Clause.prototype.RESOURCE_TYPES = `people`;
Clause.RESOURCE_TYPES = Clause.prototype.RESOURCE_TYPES = [
  Clause.RESOURCE_TYPE_ALL,
  Clause.RESOURCE_TYPE_EVENTS,
  Clause.RESOURCE_TYPE_PEOPLE,
];

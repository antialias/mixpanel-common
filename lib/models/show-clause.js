import {pick} from '../util';
import extend from 'lodash/fp/extend';
import EventsPropertiesClause from './events-properties-clause';
export class ShowClause extends EventsPropertiesClause {
  constructor(attrs={}, syncCustomEvent=null) {
    super(...arguments);
    this.math = attrs.math || `total`;
    this.property = attrs.property || null;

    if (this.value && this.value.custom && syncCustomEvent) {
      // If this is a custom event, pull latest data from the custom events list
      // in case it has been modified since the last time the report was saved.
      this.value = syncCustomEvent(this.value);
    }
  }

  get attrs() {
    const {math, property} = this;
    return extend(super.attrs, {math, property});
  }

  get valid() {
    return super.valid && this.MATH_TYPES.indexOf(this.math) !== -1;
  }

  toUrlData() {
    const conditionalAttrs = {math: this.math};
    const valueWhitelist = [`name`, `resourceType`];
    if (this.value && this.value.custom) {
      valueWhitelist.push(`custom`);
    }
    conditionalAttrs[`value`] = pick((this.value || {}), valueWhitelist);
    if (this.property) {
      conditionalAttrs[`property`] = this.property;
    }

    return extend(super.toUrlData(), conditionalAttrs);
  }
}
ShowClause.TYPE = ShowClause.prototype.TYPE = `show`;
ShowClause.TOP_EVENTS = ShowClause.prototype.TOP_EVENTS = {
  name: `$top_events`,
  label: `Top Events`,
  icon: `star-top-events`,
  custom: false,
  resourceType: `events`,
};
ShowClause.ALL_EVENTS = ShowClause.prototype.ALL_EVENTS = {
  name: `$all_events`,
  label: `All Events`,
  icon: `star-top-events`,
  custom: false,
  resourceType: `events`,
};
ShowClause.ALL_PEOPLE = ShowClause.prototype.ALL_PEOPLE = {
  name: `$all_people`,
  label: `All People`,
  icon: `profile`,
  resourceType: `people`,
};
ShowClause.SPECIAL_EVENTS = ShowClause.prototype.SPECIAL_EVENTS = [
  ShowClause.TOP_EVENTS,
  ShowClause.ALL_EVENTS,
  ShowClause.ALL_PEOPLE,
];
ShowClause.MATH_TYPE_TOTAL = ShowClause.prototype.MATH_TYPE_TOTAL = `total`;
ShowClause.MATH_TYPE_UNIQUE = ShowClause.prototype.MATH_TYPE_UNIQUE = `unique`;
ShowClause.MATH_TYPE_AVERAGE = ShowClause.prototype.MATH_TYPE_AVERAGE = `average`;
ShowClause.MATH_TYPE_MEDIAN = ShowClause.prototype.MATH_TYPE_MEDIAN = `median`;
ShowClause.MATH_TYPE_MIN = ShowClause.prototype.MATH_TYPE_MIN = `min`;
ShowClause.MATH_TYPE_MAX = ShowClause.prototype.MATH_TYPE_MAX = `max`;
ShowClause.MATH_TYPES = ShowClause.prototype.MATH_TYPES = [
  ShowClause.MATH_TYPE_TOTAL,
  ShowClause.MATH_TYPE_UNIQUE,
  ShowClause.MATH_TYPE_AVERAGE,
  ShowClause.MATH_TYPE_MEDIAN,
  ShowClause.MATH_TYPE_MIN,
  ShowClause.MATH_TYPE_MAX,
];


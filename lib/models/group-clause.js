import extend from 'lodash/fp/extend';
import EventsPropertiesClause from './events-property-clause';
import {
  TIME_UNITS,
  TIME_UNIT_LIST,
  PROPERTY_TYPES,
} from '../constants';
export class GroupClause extends EventsPropertiesClause {
  constructor(attrs={}) {
    super(...arguments);
    this.filterType = attrs.filterType || GroupClause.FILTER_TYPES[0];
    this.propertyType = attrs.propertyType || null;
    this.typeCast = attrs.typeCast || null;
    this.unit = attrs.unit || null;
    this.editing = attrs.editing || null;
    if (this.isDatetimeProperty && !this.editing && !this.unit) {
      this.unit = TIME_UNITS.DAY;
    }
  }

  get valid() {
    const validIfDatetime = this.isDatetimeProperty ? TIME_UNIT_LIST.includes(this.unit) : true;
    return super.valid &&
      this.FILTER_TYPES.indexOf(this.filterType) !== -1 &&
      this.PROPERTY_TYPES.includes(this.propertyType) &&
      validIfDatetime;
  }

  get attrs() {
    return extend(super.attrs, {
      filterType: this.filterType,
      propertyType: this.propertyType,
      typeCast: this.typeCast,
      unit: this.unit,
    });
  }

  toUrlData() {
    const conditionalAttrs = {propertyType: this.propertyType};
    if (this.isDatetimeProperty) {
      conditionalAttrs.unit = this.unit || TIME_UNITS.DAY;
    }
    if (this.typeCast) {
      conditionalAttrs.typeCast = this.typeCast;
    }
    return extend(super.toUrlData(), conditionalAttrs);
  }

  get isDatetimeProperty() {
    const realType = this.typeCast || this.propertyType;
    return realType === `datetime`;
  }
}
GroupClause.TYPE = GroupClause.prototype.TYPE = `group`;
GroupClause.EVENT_DATE = GroupClause.prototype.EVENT_DATE = {
  label: `Date`,
  icon: `star-top-events`,
  name: `$date`,
  type: `datetime`,
  resourceType: `events`,
};
GroupClause.SPECIAL_PROPERTIES = GroupClause.prototype.SPECIAL_PROPERTIES = [
  GroupClause.EVENT_DATE,
];
GroupClause.FILTER_TYPES = GroupClause.prototype.FILTER_TYPES = PROPERTY_TYPES;
GroupClause.PROPERTY_TYPES = GroupClause.prototype.PROPERTY_TYPES = PROPERTY_TYPES;
GroupClause.PROPERTY_TYPECASTS = GroupClause.prototype.PROPERTY_TYPECASTS = [`string`, `number`, `boolean`];


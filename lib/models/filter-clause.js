import TimeClause from './time-clause';
import EventsPropertiesClause from './events-property-clause';
import extend from 'lodash/fp/extend';
import {pick} from '../util';
import {PROPERTY_TYPES} from '../constants';

export class FilterClause extends EventsPropertiesClause {
  constructor(attrs={}) {
    super(...arguments);

    this.filterType = attrs.filterType || FilterClause.FILTER_TYPES[0];
    this.filterValue = (attrs.filterValue === 0 || attrs.filterValue) ? attrs.filterValue : null;
    this.filterSearch = attrs.filterSearch || null;
    this.filterDateUnit = attrs.filterDateUnit || TimeClause.TIME_UNIT_LIST[0];

    const filterOperators = FilterClause.FILTER_OPERATORS[this.filterType];
    this.filterOperator = filterOperators.includes(attrs.filterOperator) ? attrs.filterOperator : filterOperators[0];

    this.editing = attrs.editing || null;
  }

  get attrs() {
    const {
      filterType,
      filterOperator,
      filterValue,
      filterSearch,
      filterDateUnit,
      editing,
    } = this;

    return extend(super.attrs, {
      filterType,
      filterOperator,
      filterValue,
      filterSearch,
      filterDateUnit,
      editing,
    });
  }

  toUrlData() {
    const filterAttrs = pick(this.attrs, [
      `filterType`,
      `filterOperator`,
      `filterValue`,
      `filterDateUnit`,
    ]);
    return extend(super.toUrlData(), filterAttrs);
  }

  get valid() {
    const isDatetime = this.filterType === `datetime`;
    const isFilterTypeValid = this.FILTER_TYPES.includes(this.filterType);
    const isFilterOperatorValid = this.FILTER_OPERATORS[this.filterType].includes(this.filterOperator);
    const isFilterOperatorTimeRange = isDatetime && TimeClause.RANGE_LIST.includes(this.filterOperator);

    return super.valid && isFilterTypeValid && (isFilterOperatorValid || isFilterOperatorTimeRange);
  }

  get filterOperatorIsSetOrNotSet() {
    return this.filterOperator === `is set` || this.filterOperator === `is not set`;
  }

  get isEditingFilterOperator() {
    return this.editing === `filterOperator`;
  }

  get isEditingFilterDateUnit() {
    return this.editing === `filterDateUnit`;
  }
}
FilterClause.TYPE = FilterClause.prototype.TYPE = `filter`;
FilterClause.FILTER_OPERATORS = FilterClause.prototype.FILTER_OPERATORS = {
  string: [
    `contains`,
    `does not contain`,
    `equals`,
    `does not equal`,
    `is set`,
    `is not set`,
  ],
  number: [
    `is between`,
    `is greater than`,
    `is less than`,
    `is equal to`,
  ],
  datetime: [
    `was on`,
    `was between`,
    `was less than`,
    `was more than`,
    `was before`,
    `was after`,
    `was in the`,
  ],
  boolean: [
    `is true`,
    `is false`,
  ],
  list: [
    `contains`,
    `does not contain`,
  ],
};
FilterClause.FILTER_TYPES = FilterClause.prototype.FILTER_TYPES = PROPERTY_TYPES;


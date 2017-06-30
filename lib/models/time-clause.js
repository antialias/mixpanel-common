import Clause from './clause';
import extend from 'lodash/fp/extend';
import * as constants from '../constants';
export default class TimeClause extends Clause {
  constructor(attrs={}) {
    super(...arguments);

    if (attrs.range) {
      let {unit, value} = TimeClause.rangeToUnitValue(attrs.range);

      this.unit = unit;
      this.value = value;
    } else {
      this.unit = attrs.unit;
      this.value = attrs.value;
    }
  }

  get attrs() {
    const {unit, value} = this;
    return extend(super.attrs, {unit, value});
  }

  get valid() {
    /* conditions:
     * - unit must be one of TimeClause.TIME_UNIT_LIST
     * - value must exist
     * - value must be either a single entry OR an array of entries
     * - entries in value must be numbers OR Dates
     * - numbers in value must be greater than 0
     */
    return (
      this.TIME_UNIT_LIST.indexOf(this.unit) !== -1 &&
      this.value &&
      (
        (typeof this.value === `number` && this.value > 0) ||
        (this.value instanceof Date) ||
        (
          Array.isArray(this.value) &&
          this.value.length === 2 &&
          (
            (
              (typeof this.value[0] === `string` && typeof this.value[1] === `string`)
            )
            ||
            (
              (typeof this.value[0] === `number` && this.value[0] > 0) &&
              (typeof this.value[1] === `number` && this.value[1] > 0)
            )
            ||
            (
              (this.value[0] instanceof Date && this.value[1] instanceof Date)
            )
          )
        )
      )
    );
  }

  get range() {
    return TimeClause.unitValueToRange(this.unit, this.value);
  }

  static rangeToUnitValue(range) {
    return constants.RANGE_TO_VALUE_AND_UNIT[range] || {};
  }

  static unitValueToRange(unit, value) {
    const unitVals = constants.UNIT_AND_VALUE_TO_RANGE[unit];
    return (unitVals && unitVals[value]) || null;
  }
}
TimeClause.TYPE = TimeClause.prototype.TYPE = `time`;
TimeClause.RANGES = TimeClause.prototype.RANGES = constants.RANGES;
TimeClause.RANGE_LIST = TimeClause.prototype.RANGE_LIST = constants.RANGE_LIST;
TimeClause.TIME_UNITS = TimeClause.prototype.TIME_UNITS = constants.TIME_UNITS;
TimeClause.TIME_UNIT_LIST = TimeClause.prototype.TIME_UNIT_LIST = constants.TIME_UNIT_LIST;
TimeClause.RANGE_TO_VALUE_AND_UNIT = TimeClause.prototype.RANGE_TO_VALUE_AND_UNIT = constants.RANGE_TO_VALUE_AND_UNIT;
TimeClause.UNIT_AND_VALUE_TO_RANGE = TimeClause.prototype.UNIT_AND_VALUE_TO_RANGE = constants.UNIT_AND_VALUE_TO_RANGE;

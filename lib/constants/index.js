// Time constants
export const TIME_UNITS = {
  HOUR: `hour`,
  DAY: `day`,
  WEEK: `week`,
  MONTH: `month`,
  QUARTER: `quarter`,
  YEAR: `year`,
};
export const RANGES = {
  HOURS: `Last 96 hours`,
  MONTH: `Last 30 days`,
  WEEKS: `Last 24 weeks`,
  QUARTER: `Last 4 quarters`,
  YEAR: `Last 12 months`,
  CUSTOM: `Choose a date range...`,
};
export const RANGE_LIST = [
  RANGES.HOURS, RANGES.MONTH, RANGES.WEEKS, RANGES.YEAR, RANGES.QUARTER, RANGES.CUSTOM,
];
export const RANGE_TO_VALUE_AND_UNIT = {
  [RANGES.HOURS]:   {value: 96, unit: TIME_UNITS.HOUR},
  [RANGES.MONTH]:   {value: 30, unit: TIME_UNITS.DAY},
  [RANGES.WEEKS]:   {value: 24, unit: TIME_UNITS.WEEK},
  [RANGES.QUARTER]: {value: 4,  unit: TIME_UNITS.QUARTER},
  [RANGES.YEAR]:    {value: 12, unit: TIME_UNITS.MONTH},
};
export const UNIT_AND_VALUE_TO_RANGE = {
  hour: {
    96: RANGES.HOURS,
  },
  day: {
    30: RANGES.MONTH,
  },
  week: {
    24: RANGES.WEEKS,
  },
  quarter: {
    4: RANGES.QUARTER,
  },
  month: {
    12: RANGES.YEAR,
  },
};
export const TYPE_FORMAT_NAME = {
  'show': `Compare`,
  'group': `Group by`,
  'filter': `Filter`,
  'time': `Time`,
};
export const TIME_UNIT_LIST = [
  TIME_UNITS.HOUR, TIME_UNITS.DAY, TIME_UNITS.WEEK, TIME_UNITS.MONTH, TIME_UNITS.QUARTER, TIME_UNITS.YEAR,
];
export const PROPERTY_TYPES = [
  `string`, `number`, `datetime`, `boolean`, `list`,
];

import Clause from './clause';
import extend from 'lodash/fp/extend';

export default class EventsPropertiesClause extends Clause {
  constructor(attrs={}) {
    super(...arguments);
    this.value = attrs.value || null;
    this.resourceType = attrs.resourceType || Clause.RESOURCE_TYPES[0];
    this.profileType = attrs.profileType || null;
    this.search = attrs.search || ``;
  }

  get attrs() {
    const {value, resourceType, profileType, search} = this;
    return extend(super.attrs, {value, resourceType, profileType, search});
  }

  get valid() {
    return (
      super.valid &&
      !!this.value &&
      this.RESOURCE_TYPES.indexOf(this.resourceType) !== -1 &&
      typeof this.search === `string`
    );
  }

  get source() {
    return this.profileType || this.resourceType;
  }

  toUrlData() {
    const {value, resourceType, profileType} = this.attrs;
    return extend(super.toUrlData(), {value, resourceType, profileType});
  }
}


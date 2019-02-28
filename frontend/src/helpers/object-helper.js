import _ from 'lodash';

export const keysToCamelCase = (obj) => _.mapKeys(obj, (v, k) => _.camelCase(k));

export const keysToSnakeCase = (obj) => _.mapKeys(obj, (v, k) => _.snakeCase(k));

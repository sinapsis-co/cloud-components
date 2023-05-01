import { log } from 'console';

export function SerializeKeyMapper(key: string) {
  return function (target: any, propertyKey: string) {
    // log(target, propertyKey);
    if (!target.serializerMapper) {
      target.serializerMapper = {};
    }
    if (!target.deserializerMapper) {
      target.deserializerMapper = {};
    }
    target.serializerMapper[propertyKey] = key;
    target.deserializerMapper[key] = propertyKey;
  };
}

export function SerializableEntity(target: any) {
  log('target', target);
  const { serializerMapper, deserializerMapper } = target.prototype;
  log(serializerMapper, deserializerMapper);
  target.prototype.serialize = function (data: any): any {
    log('in method:', serializerMapper);
    const result: any = {};
    for (const key in data) {
      // eslint-disable-next-line no-prototype-builtins
      if (serializerMapper && serializerMapper.hasOwnProperty(key)) {
        result[serializerMapper[key]] = data[key];
      } else {
        result[key] = data[key];
      }
    }
    return result;
  };
  target.prototype.deserialize = function (data: any): any {
    const result: any = {};
    for (const key in data) {
      // eslint-disable-next-line no-prototype-builtins
      if (deserializerMapper && deserializerMapper.hasOwnProperty(key)) {
        result[deserializerMapper[key]] = data[key];
      } else {
        result[key] = data[key];
      }
    }
    return result;
  };
}

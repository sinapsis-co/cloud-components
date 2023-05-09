import { Model } from '@sinapsis-co/cc-sdk/model';
import { IndexSerializeConfig } from './types/config';
import { TableStoreBuilder } from './types/table-store-builder';

export const entityDeserialize = <M extends Model>(table: typeof TableStoreBuilder<any>) => {
  return (entityStore: M['Store']): M['Entity'] => {
    const definition = new table();
    const store = entityStore!;
    const entity: M['Entity'] = store;
    delete entity[definition.keyMapping.pk];
    if (definition.keyMapping.sk) delete entity[definition.keyMapping.sk];
    if (definition.indexes) {
      Object.values(definition.indexes).forEach((index) => {
        delete entity[index.pk];
      });
    }
    return entity;
  };
};

export const indexParsing = <M extends Model>(
  indexSerialize: IndexSerializeConfig<M> | undefined,
  table: typeof TableStoreBuilder<any>
): ((entity: M['Entity']) => Record<string, string>) => {
  return (entity: M['Entity']): Record<string, string> => {
    if (!indexSerialize) return {};
    const newFields = {};
    const indexesFields = indexSerialize(entity);
    const definition = new table();
    const indexes = definition.indexes;
    if (indexes) {
      Object.keys(indexes).forEach((index) => {
        const realPk = indexes[index]['pk'];
        const realSk = indexes[index]['sk'];
        newFields[realPk] = indexesFields[index]['pk'];
        if (realSk) newFields[realSk] = indexesFields[index]['sk'];
      });
    }
    return newFields;
  };
};

export const indexNames = (table: typeof TableStoreBuilder<any>): string[] => {
  const definition = new table();
  return Object.keys(definition.indexes || {});
};

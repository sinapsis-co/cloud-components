import { Model } from 'model';
import { IndexSerializeConfig, RepositoryConfig } from './types/config';
import { TableStoreBuilder } from './types/table-store-builder';

export const entityDeserialize = <M extends Model>(table: typeof TableStoreBuilder<any>) => {
  return (entityStore: M['Entity']): M['Entity'] => {
    const definition = new table();
    const store = entityStore!;
    const entity: M['Entity'] = store;
    delete entity['PK'];
    if (definition.keyMapping.SK) delete entity['SK'];
    if (definition.indexes) {
      Object.values(definition.indexes).forEach((index) => {
        delete entity[index.PK];
      });
    }
    return entity;
  };
};

export const indexParsing = <T extends TableStoreBuilder, M extends Model>(
  indexSerialize: IndexSerializeConfig<T, M> | undefined,
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
        const realPk = indexes[index]['PK'];
        const realSk = indexes[index]['SK'];
        if (indexesFields[index]['PK']) newFields[realPk] = indexesFields[index]['PK'];
        if (realSk && indexesFields[index]['SK']) newFields[realSk] = indexesFields[index]['SK'];
      });
    }
    return newFields;
  };
};

export const entitySerialized =
  <T extends TableStoreBuilder, M extends Model>(
    repoConfig: RepositoryConfig<T, M>,
    table: typeof TableStoreBuilder<any>
  ) =>
  (key: M['Key'], body: M['Body']): M['Entity'] & T['keyMapping'] => {
    const originalEntity: M['Entity'] = {
      type: repoConfig.type,
      ...key,
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const indexes = repoConfig.indexSerialize ? indexParsing(repoConfig.indexSerialize, table) : (e: any) => e;

    return {
      ...repoConfig.keySerialize(key),
      ...indexes(originalEntity),
      ...originalEntity,
    };
  };

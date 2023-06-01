import { Model } from 'model';
import { IndexSerializeConfig, RepositoryConfig } from '../types/config';
import { TableStoreBuilder } from '../types/table-store-builder';

export const entityDeserialize = <M extends Model>(table: typeof TableStoreBuilder<any>) => {
  return (entityStore: M['Entity']): M['Entity'] => {
    const definition = new table();
    const store = entityStore!;
    const entity: M['Entity'] = store;
    delete entity['PK'];
    if (definition.keyMapping.SK) delete entity['SK'];
    if (definition.genericIndexes) {
      Object.values(definition.genericIndexes).forEach((index) => {
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
    const genericIndexesFields = indexSerialize(entity);
    const definition = new table();
    const genericIndexes = definition.genericIndexes;
    if (genericIndexes) {
      Object.keys(genericIndexes).forEach((index) => {
        const realPk = genericIndexes[index]['PK'];
        const realSk = genericIndexes[index]['SK'];
        if (genericIndexesFields[index]['PK']) newFields[realPk] = genericIndexesFields[index]['PK'];
        if (realSk && genericIndexesFields[index]['SK']) newFields[realSk] = genericIndexesFields[index]['SK'];
      });
    }
    return newFields;
  };
};

export const indexPkMapping = (table: typeof TableStoreBuilder<any>): ((indexName: string) => string) => {
  return (indexName: string): string => {
    const definition = new table();
    const index =
      (definition.genericIndexes && definition.genericIndexes[indexName]) ||
      (definition.attIndexes && definition.attIndexes[indexName]);
    return index!['PK'];
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

    const genericIndexes = repoConfig.genericIndexSerialize
      ? indexParsing(repoConfig.genericIndexSerialize, table)
      : (e: any) => e;

    return {
      ...repoConfig.keySerialize(key),
      ...genericIndexes(originalEntity),
      ...originalEntity,
    };
  };

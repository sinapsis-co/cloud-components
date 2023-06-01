import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { Model } from 'model';
import { TableStoreBuilder } from './table-store-builder';

export type RepositoryConfig<T extends TableStoreBuilder, M extends Model> = {
  type: M['Type'];
  tableName: T['tableName'];
  keySerialize: (key: M['Key']) => Record<keyof T['keyMapping'], string>;
  genericIndexSerialize?: IndexSerializeConfig<T, M>;
};

export type IndexReq<T extends TableStoreBuilder, M extends Model> = T['genericIndexes'] extends Record<
  any,
  { PK: string; SK?: string }
>
  ? RepositoryConfig<T, M> & Required<Pick<RepositoryConfig<T, M>, 'genericIndexSerialize'>>
  : RepositoryConfig<T, M>;

export type IndexSerializeOutput<T extends TableStoreBuilder> = T['genericIndexes'] extends Record<
  any,
  { PK: string; SK?: string }
>
  ? Record<keyof T['genericIndexes'], Record<keyof T['genericIndexes'][keyof T['genericIndexes']], string | undefined>>
  : never;

export type IndexSerializeConfig<T extends TableStoreBuilder, M extends Model> = (
  entity: M['Entity']
) => IndexSerializeOutput<T>;

export type ViewConfig<T extends TableStoreBuilder> = {
  tableName: T['tableName'];
};

export type EntityDeserialize<M extends Model> = (entityStore: M['Entity']) => M['Entity'];

export type IndexPkMapping = (indexName: string) => string;

export type RepoOpConfig<T extends TableStoreBuilder, M extends Model> = RepositoryConfig<T, M> & {
  entityDeserialize: EntityDeserialize<M>;
  indexPkMapping: IndexPkMapping;
  entitySerialized: (key: M['Key'], body: M['Body']) => M['Entity'] & T['keyMapping'];
  dynamoClient: DynamoDBDocumentClient;
};
export type ViewOpConfig<T extends TableStoreBuilder, M extends Model> = Omit<
  RepoOpConfig<T, M>,
  'keySerialize' | 'type' | 'entitySerialized'
>;

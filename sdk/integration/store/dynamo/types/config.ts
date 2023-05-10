import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { Model } from 'model';
import { TableStoreBuilder } from './table-store-builder';

export type RepositoryConfig<T extends TableStoreBuilder, M extends Model> = {
  type: M['Type'];
  tableName: T['tableName'];
  keySerialize: (key: M['Key']) => Record<keyof T['keyMapping'], string>;
  indexSerialize?: IndexSerializeConfig<T, M>;
};

export type IndexReq<T extends TableStoreBuilder, M extends Model> = T['indexes'] extends Record<
  any,
  { PK: string; SK?: string }
>
  ? RepositoryConfig<T, M> & Required<Pick<RepositoryConfig<T, M>, 'indexSerialize'>>
  : RepositoryConfig<T, M>;

export type IndexSerializeOutput<T extends TableStoreBuilder> = T['indexes'] extends Record<
  any,
  { PK: string; SK?: string }
>
  ? Record<keyof T['indexes'], Record<keyof T['indexes'][keyof T['indexes']], string | undefined>>
  : never;

export type IndexSerializeConfig<T extends TableStoreBuilder, M extends Model> = (
  entity: M['Entity']
) => IndexSerializeOutput<T>;

export type ViewConfig<T extends TableStoreBuilder> = {
  tableName: T['tableName'];
};

export type EntityDeserialize<M extends Model> = (entityStore: M['Entity']) => M['Entity'];

export type OperationConfig<T extends TableStoreBuilder, M extends Model> = Omit<
  RepositoryConfig<T, M>,
  'indexSerialize'
> & {
  entityDeserialize: EntityDeserialize<M>;
  entitySerialized: (key: M['Key'], body: M['Body']) => M['Entity'] & T['keyMapping'];
  dynamoClient: DynamoDBDocumentClient;
};
export type OperationConfigView<T extends TableStoreBuilder, M extends Model> = Omit<
  OperationConfig<T, M>,
  'keySerialize' | 'type' | 'entitySerialized'
>;
export type OperationConfigComposite<T extends TableStoreBuilder> = Omit<
  OperationConfig<T, any>,
  'keySerialize' | 'type' | 'entitySerialized' | 'entityDeserialize'
>;

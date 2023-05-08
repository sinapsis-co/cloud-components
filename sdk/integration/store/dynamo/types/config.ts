import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { Model } from 'model';

export type RepositoryConfig<M extends Model> = {
  type: M['Type'];
  tableName: M['StoreBuilder']['tableName'];
  keySerialize: (key: M['Key']) => Record<keyof M['StoreBuilder']['keyMapping'], string>;
  indexSerialize?: IndexSerializeConfig<M>;
};

export type IndexSerializeConfig<M extends Model> = (
  entity: M['Entity']
) => Record<
  keyof M['StoreBuilder']['indexes'],
  Record<keyof M['StoreBuilder']['indexes'][keyof M['StoreBuilder']['indexes']], string | undefined>
>;

export type ViewConfig<M extends Model> = {
  tableName: M['StoreBuilder']['tableName'];
};

export type EntityDeserialize<M extends Model> = (entityStore: M['Store']) => M['Entity'];

export type OperationConfig<M extends Model> = Omit<RepositoryConfig<M>, 'indexSerialize'> & {
  entityDeserialize: EntityDeserialize<M>;
  indexSerialize?: (entity: M['Entity']) => Record<string, string>;
  dynamoClient: DynamoDBDocumentClient;
};
export type OperationConfigView<M extends Model> = Omit<OperationConfig<M>, 'keySerialize' | 'type'>;

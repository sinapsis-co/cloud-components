import { DynamoDBDocumentClient, PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';
import { PlatformFault } from '../../../error';
import { dispatchEvent } from '../../../integrations/event/dispatch-event';
import {
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityRepositoryConfig,
  EntityStore,
  RepositoryEvent,
} from '../interface';
import { CreateItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';

export const createItem = <
  Builder extends EntityBuilder,
  Table extends TableBuilder = TableBuilder,
  Omitted extends keyof Builder['body'] = ''
>(
  repoConfig: EntityRepositoryConfig<Builder, Table, EntityCreate<Builder, Omitted>>,
  dynamodb: DynamoDBDocumentClient
): CreateItemFn<Builder, EntityCreate<Builder, Omitted>> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    entityCreate: EntityCreate<Builder, Omitted>,
    params?: Partial<PutCommandInput> & { emitEvent?: boolean }
  ): Promise<Entity<Builder>> => {
    const TableName = process.env[parseTableName(repoConfig.tableName)];
    const item = repoConfig.entitySerialize(key, entityCreate);
    await dynamodb.send(new PutCommand({ TableName, Item: item, ...params })).catch((e) => {
      throw new PlatformFault({ code: 'FAULT_DYN_CREATE_ITEM', detail: e.message });
    });

    const entity = repoConfig.entityDeserialize(item as EntityStore<Builder, Table>);

    if (params?.emitEvent) {
      await dispatchEvent<RepositoryEvent<Builder>['created']>(
        { name: `app.${repoConfig.repoName}.created`, source: 'app' },
        entity
      );
    }
    return entity;
  };
};

import { DeleteCommand, DeleteCommandInput, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';
import { PlatformError, PlatformFault } from '../../../error';
import { dispatchEvent } from '../../../integrations/event/dispatch-event';
import { Entity, EntityBuilder, EntityRepositoryConfig, EntityStore, RepositoryEvent } from '../interface';
import { DeleteItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';

export const deleteItem = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: EntityRepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): DeleteItemFn<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<DeleteCommandInput> & { emitEvent?: boolean }
  ): Promise<Entity<Builder>> => {
    const TableName = process.env[parseTableName(repoConfig.tableName)];
    const { Attributes } = await dynamodb
      .send(new DeleteCommand({ TableName, Key: repoConfig.keySerialize(key), ReturnValues: 'ALL_OLD', ...params }))
      .catch((e) => {
        throw new PlatformFault({ code: 'FAULT_DYN_DELETE_ITEM', detail: e.message });
      });

    if (!Attributes) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });

    const entity = repoConfig.entityDeserialize(Attributes as EntityStore<Builder, Table>);

    if (params?.emitEvent) {
      await dispatchEvent<RepositoryEvent<Builder>['deleted']>(
        { name: `app.${repoConfig.repoName}.deleted`, source: 'app' },
        entity
      );
    }

    return entity;
  };
};

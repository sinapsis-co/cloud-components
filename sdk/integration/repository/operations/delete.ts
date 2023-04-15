import { DeleteCommand, DeleteCommandInput, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';
import { PlatformError } from '../../../error';
import { Tracing } from '../../../tracing';
import { dispatchEvent } from '../../event/dispatch-event';
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
    const tableName = process.env[parseTableName(repoConfig.tableName)];
    const serializedKey = repoConfig.keySerialize(key);

    const cmd = async () => {
      const { Attributes } = await dynamodb.send(
        new DeleteCommand({
          TableName: tableName,
          Key: serializedKey,
          ReturnValues: 'ALL_OLD',
          ...params,
        })
      );

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

    const meta = { tableName, rawKey: key, serializedKey, params };
    return Tracing.capture('deleteItem', 'FAULT_DYN_DELETE_ITEM', JSON.stringify(key), cmd, meta);
  };
};

import { DynamoDBDocumentClient, UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';

import { PlatformError } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Tracing } from 'tracing';
import { Entity, EntityBuilder, EntityStore, RepositoryConfig, RepositoryEvent } from '../interface';
import { RecoverItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';

export const recoverItem = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: RepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): RecoverItemFn<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<UpdateCommandInput> & { emitEvent?: boolean }
  ): Promise<Entity<Builder>> => {
    const tableName = process.env[parseTableName(repoConfig.tableName)];
    const serializedKey = repoConfig.keySerialize(key);

    const cmd = async () => {
      const { Attributes } = await dynamodb
        .send(
          new UpdateCommand({
            TableName: tableName,
            Key: serializedKey,
            ReturnValues: 'ALL_NEW',
            UpdateExpression: 'REMOVE #deleteTTL',
            ExpressionAttributeNames: { '#deleteTTL': 'deleteTTL' },
            ...params,
          })
        )
        .catch((e) => {
          if (e.name === 'ConditionalCheckFailedException')
            throw new PlatformError({ code: 'ERROR_CONDITIONAL_CHECK_FAILED', statusCode: 400 });
          else throw e;
        });

      if (!Attributes) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });

      const entity = repoConfig.entityDeserialize(Attributes as EntityStore<Builder, Table>);
      if (params?.emitEvent) {
        await dispatchEvent<RepositoryEvent<Builder>['recovered']>(
          { name: `app.${repoConfig.repoName}.recovered`, source: 'app' },
          entity
        );
      }
      return entity;
    };

    const meta = { tableName, rawKey: key, serializedKey, params };
    return Tracing.capture('recoverItem', 'FAULT_DYN_RECOVER_ITEM', JSON.stringify(key), cmd, meta);
  };
};

import { DynamoDBDocumentClient, UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';
import { PlatformError, PlatformFault } from '../../../error';
import { dispatchEvent } from '../../event/dispatch-event';
import { Entity, EntityBuilder, EntityRepositoryConfig, EntityStore, RepositoryEvent } from '../interface';
import { RecoverItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';

export const recoverItem = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: EntityRepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): RecoverItemFn<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<UpdateCommandInput> & { emitEvent?: boolean }
  ): Promise<Entity<Builder>> => {
    const TableName = process.env[parseTableName(repoConfig.tableName)];
    const { Attributes } = await dynamodb
      .send(
        new UpdateCommand({
          TableName,
          Key: repoConfig.keySerialize(key),
          ReturnValues: 'ALL_NEW',
          UpdateExpression: 'REMOVE #deleteTTL',
          ExpressionAttributeNames: { '#deleteTTL': 'deleteTTL' },
          ...params,
        })
      )
      .catch((e) => {
        throw new PlatformFault({ code: 'FAULT_DYN_RECOVER_ITEM', detail: e.message });
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
};

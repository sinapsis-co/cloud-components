import { BatchWriteCommand, BatchWriteCommandInput, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';
import { PlatformFault } from '../../../error';
import { chunkArray } from '../../../util/chunk-array';
import { wait } from '../../../util/executers';
import { Entity, EntityBuilder, EntityCreate, EntityRepositoryConfig, EntityStore } from '../interface';
import { BatchCreateItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';

export type BatchCreateItemParams = {
  autoRetry?: true;
  tableName?: string;
};

export const batchCreateItem = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: EntityRepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient,
  params?: BatchCreateItemParams
): BatchCreateItemFn<Builder> => {
  return async (
    items: { key: EntityBuilder<Builder>['key']; entityCreate: EntityCreate<Builder> }[]
  ): Promise<Entity<Builder>[]> => {
    const table = process.env[parseTableName(repoConfig.tableName)]!;
    const entities: EntityStore<Builder, Table>[] = items.map((e) => repoConfig.entitySerialize(e.key, e.entityCreate));
    const chunk = chunkArray(entities, 25);
    await Promise.all(
      chunk.map(async (c): Promise<any> => {
        const RequestItems: BatchWriteCommandInput['RequestItems'] = {
          [table]: c.map((Item) => {
            return { PutRequest: { Item } };
          }),
        };
        await call(dynamodb, RequestItems, table, params?.autoRetry);
      })
    );

    return entities.map((i) => repoConfig.entityDeserialize(i));
  };
};

const call = async (
  dynamodb: DynamoDBDocumentClient,
  RequestItems: BatchWriteCommandInput['RequestItems'],
  table: string,
  autoRetry?: boolean
): Promise<void> => {
  const { UnprocessedItems } = await dynamodb.send(new BatchWriteCommand({ RequestItems })).catch((e) => {
    throw new PlatformFault({ code: 'FAULT_DYN_BATCH_CREATE_ITEM', detail: e.message });
  });
  if (autoRetry && UnprocessedItems && UnprocessedItems[table]) {
    await wait(Math.ceil(Math.random() * 2000));
    await call(dynamodb, UnprocessedItems, table, autoRetry);
  }
};

import { DynamoDBDocumentClient, GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import { PlatformError, PlatformFault } from '../../error';
import { Entity, EntityBuilder, EntityRepositoryConfig, GetItemFn } from '../interface';

export const getItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDBDocumentClient
): GetItemFn<Builder> => {
  return async (key: EntityBuilder<Builder>['key'], params?: Partial<GetCommandInput>): Promise<Entity<Builder>> => {
    const { Item } = await dynamodb
      .send(
        new GetCommand({
          TableName: repoConfig.tableName,
          Key: repoConfig.keySerialize(key),
          ...params,
        })
      )
      .catch((e) => {
        throw new PlatformFault({ code: 'FAULT_DYN_GET_ITEM', detail: e.message });
      });

    if (!Item) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });
    return repoConfig.entityDeserialize(Item);
  };
};

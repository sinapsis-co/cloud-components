import { DynamoDBDocumentClient, GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import { PlatformFault } from '../../error';
import { CheckItemExistsFn, Entity, EntityBuilder, EntityRepositoryConfig } from '../interface';

export const checkItemExists = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDBDocumentClient
): CheckItemExistsFn<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<GetCommandInput>
  ): Promise<{ exists: boolean; entity?: Entity<Builder> }> => {
    const { Item } = await dynamodb
      .send(
        new GetCommand({
          TableName: repoConfig.tableName,
          Key: repoConfig.keySerialize(key),
          ...params,
        })
      )
      .catch((e) => {
        throw new PlatformFault({ code: 'FAULT_DYN_CHECK_ITEM_EXISTS', detail: e.message });
      });

    if (!Item) return { exists: false };
    return { exists: true, entity: repoConfig.entityDeserialize(Item) };
  };
};

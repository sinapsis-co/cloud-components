import { DynamoDBDocumentClient, UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';
import { HandledError, HandledFault } from '../../util/handled-exception';
import { Entity, EntityBuilder, EntityRepositoryConfig, RecoverItemFn } from '../interface';

export const recoverItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDBDocumentClient
): RecoverItemFn<Builder> => {
  return async (key: EntityBuilder<Builder>['key'], params?: Partial<UpdateCommandInput>): Promise<Entity<Builder>> => {
    const { Attributes } = await dynamodb
      .send(
        new UpdateCommand({
          TableName: repoConfig.tableName,
          Key: repoConfig.keySerialize(key),
          ReturnValues: 'ALL_NEW',
          UpdateExpression: 'REMOVE #deleteTTL',
          ExpressionAttributeNames: { '#deleteTTL': 'deleteTTL' },
          ...params,
        })
      )
      .catch((e) => {
        throw new HandledFault({ code: 'FAULT_DYN_RECOVER_ITEM', detail: e.message });
      });

    if (!Attributes) throw new HandledError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });
    return repoConfig.entityDeserialize(Attributes);
  };
};

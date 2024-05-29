import { UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformError } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { RepoOpConfig } from '../types/config';
import { UpdateItemFn } from '../types/ops-repo';
import { TableStoreBuilder } from '../types/table-store-builder';
import { updateMapper } from '../util/update-mapper';

export const updateItem = <T extends TableStoreBuilder, M extends Model>(operationConfig: RepoOpConfig<T, M>): UpdateItemFn<M> => {
  return async (
    key: M['Key'],
    body: Partial<M['Body']>,
    params?: Partial<UpdateCommandInput> & {
      emitEvent?: boolean;
      extraUpdateExpression?: string;
      extraAttributeValues?: UpdateCommandInput['ExpressionAttributeValues'];
      extraAttributeNames?: UpdateCommandInput['ExpressionAttributeNames'];
    }
  ): Promise<M['Entity']> => {
    const tableName = process.env[operationConfig.dynamoTableNameEnvVar]!;

    const serializedKey = operationConfig.keySerialize(key);
    const mapper = updateMapper<Partial<M['Body']>>(body);

    const cmd = async () => {
      const { Attributes } = await operationConfig.dynamoClient
        .send(
          new UpdateCommand({
            TableName: tableName,
            Key: serializedKey,
            ReturnValues: 'ALL_NEW',
            UpdateExpression: params?.UpdateExpression ? `${mapper.UpdateExpression}, ${params.extraUpdateExpression}` : mapper.UpdateExpression,
            ExpressionAttributeNames: { ...mapper.ExpressionAttributeNames, ...params?.extraAttributeNames },
            ExpressionAttributeValues: { ...mapper.ExpressionAttributeValues, ...params?.extraAttributeValues },
            ...params,
          })
        )
        .catch((e) => {
          if (e.name === 'ConditionalCheckFailedException') throw new PlatformError({ code: 'ERROR_CONDITIONAL_CHECK_FAILED', statusCode: 400 });
          else throw e;
        });

      if (!Attributes) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });

      const entity: M['Entity'] = operationConfig.entityDeserialize(Attributes as M['Entity']);

      if (params?.emitEvent) {
        await dispatchEvent<M['Events']['updated']>({ name: `app.${operationConfig.type}.updated`, source: 'app' }, entity);
      }

      return entity;
    };

    const meta = { tableName, rawKey: key, serializedKey, mapper, params };
    return traceableFunction('updateItem', 'FAULT_DYN_UPDATE_ITEM', JSON.stringify(key), cmd, meta);
  };
};

import { UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformError } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Model } from 'model';
import { Tracing } from 'tracing';
import { OperationConfig } from '../types/config';
import { RecoverItemFn } from '../types/operations';
import { parseTableName } from '../util/parse-name';

export const recoverItem = <M extends Model>(operationConfig: OperationConfig<M>): RecoverItemFn<M> => {
  return async (
    key: M['Key'],
    params?: Partial<UpdateCommandInput> & { emitEvent?: boolean }
  ): Promise<M['Entity']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];
    const serializedKey = operationConfig.keySerialize(key);

    const cmd = async () => {
      const { Attributes } = await operationConfig.dynamoClient
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

      const entity = operationConfig.entityDeserialize(Attributes as unknown as M['Store']);
      if (params?.emitEvent) {
        await dispatchEvent<M['Events']['recovered']>(
          { name: `app.${operationConfig.type}.recovered`, source: 'app' },
          entity
        );
      }
      return entity;
    };

    const meta = { tableName, rawKey: key, serializedKey, params };
    return Tracing.capture('recoverItem', 'FAULT_DYN_RECOVER_ITEM', JSON.stringify(key), cmd, meta);
  };
};

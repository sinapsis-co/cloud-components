import { Context, DynamoDBPutItemRequest, util } from '@aws-appsync/utils';
import type { IngredientInput, IngredientSchema } from '../schema/ingredient';

type UnitMutationContextReq<Input> = (ctx: Context<{ input: Input }>) => DynamoDBPutItemRequest;
type UnitMutationContextRes<Result, Response> = (ctx: Context<any, any, any, any, Result>) => Response;
type Stored = Omit<IngredientSchema, 'id'> & { pk: string };

export const request: UnitMutationContextReq<IngredientInput> = (ctx) => {
  const { input } = ctx.args;
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues({ pk: util.autoId() }),
    attributeValues: util.dynamodb.toMapValues(input)!,
  };
};

export const response: UnitMutationContextRes<Stored, IngredientSchema> = (ctx) => {
  const { pk, ...att } = ctx.result;
  return { id: pk, ...att };
};

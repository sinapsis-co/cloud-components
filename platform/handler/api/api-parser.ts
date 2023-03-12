import { APIGatewayProxyEventV2WithJWTAuthorizer } from 'aws-lambda';
import { Schemy } from 'schemy-ts';
import { ApiInterfaceKeys, ApiInterfaceRequest } from '../../catalog/api';
import { ApiError } from './api-error';

export const apiParser = async <T extends ApiInterfaceKeys>(
  event: APIGatewayProxyEventV2WithJWTAuthorizer,
  schema?: Schemy
): Promise<ApiInterfaceRequest<T>> => {
  const body = await bodyParser<T['body']>(event.body, schema);
  const pathParams = paramsParser<T['pathParams']>(event.pathParameters);
  const queryParams = paramsParser<T['queryParams']>(event.queryStringParameters);
  const claims = paramsParser<T['claims']>(event.requestContext.authorizer?.jwt?.claims);

  return {
    body,
    pathParams,
    queryParams,
    claims,
  };
};

const bodyParser = async <BodyType>(body?: string, schema?: Schemy, errorName?: string): Promise<BodyType> => {
  try {
    const parsedBody = JSON.parse(body || '{}');
    if (schema) {
      return await Schemy.validate<BodyType>(parsedBody, schema, false).catch((e) => {
        throw new ApiError('ValidationError', 400, e);
      });
    }

    return parsedBody;
  } catch (error: any) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(errorName!, 400, error.message || error);
  }
};

const paramsParser = <T>(params: Record<string, unknown> = {}): T => {
  Object.keys(params).forEach((pName) => {
    if (pName.startsWith('custom:')) params[pName.replace('custom:', '')] = params[pName];
  });
  return params as T;
};

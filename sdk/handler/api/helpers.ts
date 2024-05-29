import { ApiInterfaceKeys, ApiInterfaceRequest } from 'catalog/api';
import { PlatformError } from 'error';
import { APIGatewayProxyEventV2WithJWTAuthorizer } from 'aws-lambda';
import { Schemy } from 'schemy-ts';

export const apiParser = async <T extends ApiInterfaceKeys>(
  event: APIGatewayProxyEventV2WithJWTAuthorizer,
  schema?: Schemy
): Promise<ApiInterfaceRequest<T>> => {
  const body = await bodyParser<T['body']>(event.body, schema);
  const pathParams = paramsParser<T['pathParams']>(event.pathParameters);
  const queryParams = paramsParser<T['queryParams']>(event.queryStringParameters);
  const claims = paramsParser<T['claims']>(event.requestContext.authorizer?.jwt?.claims);
  return { body, pathParams, queryParams, claims };
};

export const bodyParser = async <BodyType>(body?: string, schema?: Schemy): Promise<BodyType> => {
  try {
    const parsedBody = JSON.parse(body || '{}');
    if (schema) {
      return await Schemy.validate<BodyType>(parsedBody, schema, false).catch((e) => {
        throw new PlatformError({ code: 'ERROR_BODY_VALIDATION', detail: e });
      });
    }
    return parsedBody;
  } catch (error: any) {
    if (error instanceof PlatformError) throw error;
    throw new PlatformError({ code: 'ERROR_MALFORMED_BODY', detail: error.message });
  }
};

export const paramsParser = <T>(params: Record<string, unknown> = {}): T => {
  // Replaces custom: prefix in custom claims attributes (from cognito authorizer)
  Object.keys(params).forEach((pName) => {
    if (pName.startsWith('custom:')) params[pName.replace('custom:', '')] = params[pName];
    if (pName.startsWith('cognito:')) params[pName.replace('cognito:', '')] = params[pName];
  });
  return params as T;
};

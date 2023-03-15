/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { APIGatewayProxyEventV2WithJWTAuthorizer, APIGatewayProxyResultV2 } from 'aws-lambda';
import { Schemy } from 'schemy-ts';
import { ApiConfig, ApiInterface, ApiInterfaceKeys, ApiInterfaceRequest } from '../../catalog/api';
import { generateTracing } from '../../tracing';
import { timeoutController } from '../../tracing/timeout';
import { ApiError } from './api-error';

const DEFAULT_MAX_AGE = 10;

export const DEFAULT_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Cache-Control': `max-age=${DEFAULT_MAX_AGE}`,
  'Content-Type': 'application/json',
};

type Handler<T extends ApiInterface> = (
  event: APIGatewayProxyEventV2WithJWTAuthorizer,
  request: ApiInterfaceRequest<T>
) => Promise<T['response']>;

export const apiHandler = <T extends ApiInterface>(
  handler: Handler<T>,
  apiOptions: ApiConfig<T>,
  customHeaders?: APIGatewayProxyEventV2WithJWTAuthorizer['headers'],
  statusCode = 200
): Handler<T> => {
  return async (event: APIGatewayProxyEventV2WithJWTAuthorizer): Promise<APIGatewayProxyResultV2> => {
    const headers = { ...DEFAULT_HEADERS, ...customHeaders };
    const tracing = generateTracing();

    try {
      const request: ApiInterfaceRequest<T> = await apiParser<T>(event, apiOptions.schema);

      if (apiOptions.authorizationMdw) apiOptions.authorizationMdw(request, apiOptions.scope);

      const result = await timeoutController(handler(event, request));

      tracing.close();
      return {
        statusCode: statusCode,
        headers,
        body: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error(error);
      tracing.addFaultFlag();
      tracing.close(error);
      return {
        statusCode: error.statusCode || 500,
        headers,
        body: JSON.stringify({
          code: error.code || error.message,
          description: error.description,
        }),
      };
    }
  };
};

const apiParser = async <T extends ApiInterfaceKeys>(
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

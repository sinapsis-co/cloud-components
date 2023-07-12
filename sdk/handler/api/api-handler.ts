import type {
  APIGatewayProxyEventV2WithJWTAuthorizer,
  APIGatewayProxyResultV2,
  APIGatewayProxyStructuredResultV2,
} from 'aws-lambda';
import { Schemy } from 'schemy-ts';

import { ApiDefinition, ApiInterface, ApiInterfaceKeys, ApiInterfaceRequest } from 'catalog/api';
import { PlatformError, PlatformFault } from 'error';
import { HandledException } from 'error/types';
import { Tracing } from 'tracing';
import { timeoutController } from 'util/timeout';

const DEFAULT_MAX_AGE = process.env.CC_CACHE_MAX_AGE ? parseInt(process.env.CC_CACHE_MAX_AGE) : 10;

export const DEFAULT_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Cache-Control': `max-age=${DEFAULT_MAX_AGE}`,
  'Content-Type': 'application/json',
};

type Response = (event: APIGatewayProxyEventV2WithJWTAuthorizer) => Promise<APIGatewayProxyResultV2>;

type ApiHandler<T extends ApiInterface> = (
  event: APIGatewayProxyEventV2WithJWTAuthorizer,
  request: ApiInterfaceRequest<T>
) => Promise<T['response']>;

type ApiHandlerWithCustomResponse<T extends ApiInterface> = (
  event: APIGatewayProxyEventV2WithJWTAuthorizer,
  request: ApiInterfaceRequest<T>
) => Promise<{
  body: T['response'];
  headers?: APIGatewayProxyStructuredResultV2['headers'];
  statusCode?: number;
}>;

export type SuccessfulAuthorizationResult<ExtraData> = { authorized: true } & ExtraData;
export type FailedAuthorizationResult<ExtraData> = { authorized: false } & Partial<ExtraData>;
export type AuthorizerResult<ExtraData = object> =
  | SuccessfulAuthorizationResult<ExtraData>
  | FailedAuthorizationResult<ExtraData>;

export type AuthorizerFunction<T extends ApiInterface, AuthorizerData = object> = (
  event: APIGatewayProxyEventV2WithJWTAuthorizer,
  request: ApiInterfaceRequest<T>
) => Promise<AuthorizerResult<AuthorizerData>>;

export const apiHandler = <T extends ApiInterface>(
  handler: ApiHandler<T>,
  apiDefinition: ApiDefinition<T>
): Response => {
  return async (event) => {
    const tracing = new Tracing(event);
    try {
      const request: ApiInterfaceRequest<T> = await apiParser<T>(event, apiDefinition.schema);
      if (apiDefinition.authorizationMdw) apiDefinition.authorizationMdw(request, apiDefinition.scope);
      const result = await timeoutController(handler(event, request));
      tracing.close(result);
      return {
        headers: DEFAULT_HEADERS,
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } catch (error: any) {
      const handledException: HandledException =
        error instanceof PlatformError || error instanceof PlatformFault
          ? error
          : new PlatformFault({ code: 'FAULT_UNHANDLED', detail: error.message });
      handledException.addMeta({ functionType: process.env.CC_FUNCTION_TYPE, invokeId: event.headers['X-Request-ID'] });
      tracing.failureClose(handledException);
      return handledException.returnException(DEFAULT_HEADERS);
    }
  };
};

export const apiHandlerWithCustomResponse = <T extends ApiInterface>(
  handler: ApiHandlerWithCustomResponse<T>,
  apiDefinition: ApiDefinition<T>
): Response => {
  return async (event) => {
    const tracing = new Tracing(event);
    try {
      const request: ApiInterfaceRequest<T> = await apiParser<T>(event, apiDefinition.schema);
      if (apiDefinition.authorizationMdw) apiDefinition.authorizationMdw(request, apiDefinition.scope);
      const { headers, body, statusCode } = await timeoutController(handler(event, request));
      tracing.close(body);
      return {
        statusCode: statusCode || 200,
        headers: { ...DEFAULT_HEADERS, ...headers },
        body: JSON.stringify(body),
      };
    } catch (error: any) {
      const handledException: HandledException =
        error instanceof PlatformError || error instanceof PlatformFault
          ? error
          : new PlatformFault({ code: 'FAULT_UNHANDLED', detail: error.message });
      handledException.addMeta({ functionType: process.env.CC_FUNCTION_TYPE, invokeId: event.headers['X-Request-ID'] });
      tracing.failureClose(handledException);
      return handledException.returnException(DEFAULT_HEADERS);
    }
  };
};

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
  } catch (e: any) {
    if (e instanceof PlatformError) throw e;
    throw new PlatformError({ code: 'ERROR_MALFORMED_BODY', detail: e.message });
  }
};

export const paramsParser = <T>(params: Record<string, unknown> = {}): T => {
  Object.keys(params).forEach((pName) => {
    if (pName.startsWith('custom:')) params[pName.replace('custom:', '')] = params[pName];
  });
  return params as T;
};

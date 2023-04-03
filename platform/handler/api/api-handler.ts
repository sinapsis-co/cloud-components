import { APIGatewayProxyEventV2WithJWTAuthorizer, APIGatewayProxyResultV2 } from 'aws-lambda';
import { Schemy } from 'schemy-ts';
import { ApiConfig, ApiInterface, ApiInterfaceKeys, ApiInterfaceRequest } from '../../catalog/api';
import { PlatformError, PlatformFault } from '../../error';
import { timeoutController } from '../../error/timeout';
import { HandledException } from '../../error/types';
import { Tracing } from '../../tracing';

const DEFAULT_MAX_AGE = process.env.CC_CACHE_MAX_AGE ? parseInt(process.env.CC_CACHE_MAX_AGE) : 10;

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
    const tracing = new Tracing(event);
    try {
      const request: ApiInterfaceRequest<T> = await apiParser<T>(event, apiOptions.schema);
      if (apiOptions.authorizationMdw) apiOptions.authorizationMdw(request, apiOptions.scope);
      const result = await timeoutController(handler(event, request));
      tracing.close(result);
      return {
        headers,
        statusCode: statusCode,
        body: JSON.stringify(result),
      };
    } catch (error: any) {
      const handledException: HandledException =
        error instanceof PlatformError || error instanceof PlatformFault
          ? error
          : new PlatformFault({ code: 'FAULT_UNHANDLED', detail: error.message });
      handledException.addMeta({ functionType: process.env.CC_FUNCTION_TYPE, invokeId: event.headers['X-Request-ID'] });
      tracing.failureClose(handledException);
      return handledException.returnException(headers);
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
  return { body, pathParams, queryParams, claims };
};

const bodyParser = async <BodyType>(body?: string, schema?: Schemy): Promise<BodyType> => {
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

const paramsParser = <T>(params: Record<string, unknown> = {}): T => {
  Object.keys(params).forEach((pName) => {
    if (pName.startsWith('custom:')) params[pName.replace('custom:', '')] = params[pName];
  });
  return params as T;
};

import type {
  APIGatewayProxyEventV2WithJWTAuthorizer,
  APIGatewayProxyResultV2,
  APIGatewayProxyStructuredResultV2,
} from 'aws-lambda';

import { ApiDefinition, ApiInterface, ApiInterfaceRequest } from 'catalog/api';
import { PlatformError, PlatformFault } from 'error';
import { HandledException } from 'error/types';
import { Tracing } from 'tracing';
import { timeoutController } from 'util/timeout';
import { apiParser } from './helpers';

const DEFAULT_MAX_AGE = process.env.CC_CACHE_MAX_AGE ? parseInt(process.env.CC_CACHE_MAX_AGE) : 10;

export const DEFAULT_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Cache-Control': `max-age=${DEFAULT_MAX_AGE}`,
  'Content-Type': 'application/json',
};

type RawHandlerFn = (event: APIGatewayProxyEventV2WithJWTAuthorizer) => Promise<APIGatewayProxyResultV2>;

type ApiHandlerFn<T extends ApiInterface> = (
  event: APIGatewayProxyEventV2WithJWTAuthorizer,
  request: ApiInterfaceRequest<T>
) => Promise<T['response']>;

type ApiHandlerWithCustomFn<T extends ApiInterface> = (
  event: APIGatewayProxyEventV2WithJWTAuthorizer,
  request: ApiInterfaceRequest<T>
) => Promise<{
  body: T['response'];
  headers?: APIGatewayProxyStructuredResultV2['headers'];
  statusCode?: number;
}>;

export const apiHandler = <T extends ApiInterface>(
  handler: ApiHandlerFn<T>,
  apiDefinition: ApiDefinition<T>
): RawHandlerFn => {
  return async (event) => {
    const tracing = new Tracing(event);
    try {
      const request: ApiInterfaceRequest<T> = await apiParser<T>(event, apiDefinition.schema);
      if (apiDefinition.authorizationMdw) await apiDefinition.authorizationMdw(event, request, apiDefinition.scope);
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
  handler: ApiHandlerWithCustomFn<T>,
  apiDefinition: ApiDefinition<T>
): RawHandlerFn => {
  return async (event) => {
    const tracing = new Tracing(event);
    try {
      const request: ApiInterfaceRequest<T> = await apiParser<T>(event, apiDefinition.schema);
      if (apiDefinition.authorizationMdw) await apiDefinition.authorizationMdw(event, request, apiDefinition.scope);
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

import fetch from 'node-fetch';

import { EmptyObject } from 'catalog/api';
import { ApiIntegrationConfig, ApiIntegrationInterface } from 'catalog/api-integration';
import { PlatformFault } from 'error';
import { traceableFunction } from 'tracing';

type NotEmptyObjects<T> = {
  [P in keyof T]: Exclude<T[P], undefined> extends EmptyObject ? never : P;
}[keyof T];

type ApiParams<Api extends ApiIntegrationInterface> = Omit<
  Pick<Api, NotEmptyObjects<Api>>,
  'response' | 'errorResponse' | 'claims'
>;

export type BasicAuth = {
  user: string;
  pass: string;
};

export type Options<
  TracingMeta extends Record<string, string>,
  ErrorResponse extends boolean,
  IgnoreResponse extends boolean
> = {
  tracingMeta: TracingMeta;
  returnErrorResponse?: ErrorResponse;
  ignoreResponse?: IgnoreResponse;
  basicAuth?: BasicAuth;
  timeout?: number;
};

type Response<
  Api extends ApiIntegrationInterface,
  ErrorResponse extends boolean,
  IgnoreResponse extends boolean
> = IgnoreResponse extends true
  ? undefined
  : ErrorResponse extends true
  ? { response?: Api['response']; errorResponse?: Api['errorResponse']; statusCode: number }
  : { response: Api['response'] };

export const apiCall = async <
  Api extends ApiIntegrationInterface,
  TracingMeta extends Record<string, string>,
  ErrorResponse extends boolean,
  IgnoreResponse extends boolean
>(
  config: ApiIntegrationConfig<Api>,
  params: ApiParams<Api>,
  options: Options<TracingMeta, ErrorResponse, IgnoreResponse>
): Promise<Response<Api, ErrorResponse, IgnoreResponse>> => {
  const { url, method } = config;
  const { pathParams = {}, queryParams = {}, headers = {}, body = {} } = params as Api;

  const endpoint = Object.keys(pathParams).length
    ? Object.keys(pathParams).reduce((memo, pathP) => memo.replace(`{${pathP}}`, pathParams[pathP] as string), url)
    : url;

  const endpointWithQuery = Object.keys(queryParams).length
    ? `${endpoint}?${Object.keys(queryParams)
        .map((key) => `${key}=${queryParams[key]}`)
        .join('&')}`
    : endpoint;

  const controller = new AbortController();
  const timeout = options.timeout || parseInt(process.env.CC_FUNCTION_TIMEOUT!) - 1;

  setTimeout(() => controller.abort(), timeout * 1000);
  const cmd = async (): Promise<Response<Api, ErrorResponse, IgnoreResponse>> => {
    const callResult = await fetch(endpointWithQuery, {
      signal: controller.signal,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.basicAuth ? getBasicAuthHeader(options.basicAuth) : {}),
        ...(headers ? headers : {}),
      },
      ...(!['GET', 'HEAD'].includes(method) ? { body: JSON.stringify(body) } : {}),
    }).catch((e: { type: string; message: string }) => {
      if (e.type === 'aborted') {
        throw new PlatformFault({ code: 'FAULT_API_CALL_TIMEOUT', detail: `Timeout after ${timeout} seconds` });
      }
      throw new PlatformFault({ code: 'FAULT_API_CALL_NETWORK', detail: e.message });
    });
    const statusCode = callResult.status;

    if (!callResult.ok) {
      if (options.returnErrorResponse) {
        if (options.ignoreResponse) return undefined as Response<Api, ErrorResponse, IgnoreResponse>;
        const errorResponse: Api['errorResponse'] = await callResult.json();
        return { errorResponse, statusCode } as Response<Api, ErrorResponse, IgnoreResponse>;
      }
      throw new PlatformFault({ code: 'FAULT_API_CALL_INVALID_RESPONSE', detail: await callResult.text() });
    }
    const response: Api['response'] = await callResult.json();
    return { response } as Response<Api, ErrorResponse, IgnoreResponse>;
  };

  return traceableFunction('ApiCall', 'FAULT_API_CALL_UNHANDLED', endpointWithQuery, cmd, options.tracingMeta);
};

const getBasicAuthHeader = (basicAuth: BasicAuth) => {
  return {
    Authorization: 'Basic ' + Buffer.from(basicAuth?.user + ':' + basicAuth?.pass).toString('base64'),
  };
};

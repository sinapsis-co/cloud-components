import fetch from 'node-fetch';
import { EmptyObject } from '../../catalog/api';
import { ApiIntegrationConfig, ApiIntegrationInterface } from '../../catalog/integrations';
import { PlatformFault } from '../../error';
import { Tracing } from '../../tracing';

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

export type Options<TracingMeta, ErrorResponse> = {
  basicAuth?: BasicAuth;
  tracingMeta: TracingMeta;
  returnErrorResponse?: ErrorResponse;
};

type Response<Api extends ApiIntegrationInterface, ErrorResponse extends boolean> = ErrorResponse extends true
  ? { response?: Api['response']; errorResponse?: Api['errorResponse']; statusCode: number }
  : { response: Api['response'] };

export const apiCall = async <
  Api extends ApiIntegrationInterface,
  TracingMeta extends Record<string, string>,
  ErrorResponse extends boolean = false
>(
  config: ApiIntegrationConfig<Api>,
  params: ApiParams<Api>,
  options: Options<TracingMeta, ErrorResponse>
): Promise<Response<Api, ErrorResponse>> => {
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

  const cmd = async (): Promise<Response<Api, ErrorResponse>> => {
    const callResult = await fetch(endpointWithQuery, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.basicAuth ? getBasicAuthHeader(options.basicAuth) : {}),
        ...(headers ? headers : {}),
      },
      ...(!['GET', 'HEAD'].includes(method) ? { body: JSON.stringify(body) } : {}),
    }).catch((e) => {
      throw new PlatformFault({ code: 'FAULT_API_CALL_NETWORK', detail: e.message }).returnException();
    });
    const statusCode = callResult.status;

    if (!callResult.ok) {
      if (options.returnErrorResponse) {
        const errorResponse: Api['errorResponse'] = await callResult.json();
        return { errorResponse, statusCode } as Response<Api, ErrorResponse>;
      }
      throw new PlatformFault({ code: 'FAULT_API_CALL_INVALID_RESPONSE', detail: await callResult.text() });
    }
    const response: Api['response'] = await callResult.json();
    return { response } as Response<Api, ErrorResponse>;
  };

  return Tracing.traceableOp('ApiCall', 'FAULT_API_CALL_UNHANDLED', endpointWithQuery, cmd, options.tracingMeta);
};

const getBasicAuthHeader = (basicAuth: BasicAuth) => {
  return {
    Authorization: 'Basic ' + Buffer.from(basicAuth?.user + ':' + basicAuth?.pass).toString('base64'),
  };
};

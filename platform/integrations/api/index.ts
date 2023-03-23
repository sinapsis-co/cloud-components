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

export type ExtraParams<TracingMeta> = {
  basicAuth?: BasicAuth;
  tracingMeta: TracingMeta;
};

type Response<Api extends ApiIntegrationInterface, ErrorResponse extends boolean> = ErrorResponse extends true
  ? Api['response'] | { errorResponse: Api['errorResponse'] }
  : Api['response'];

export const apiCall = async <
  Api extends ApiIntegrationInterface,
  TracingMeta extends Record<string, string>,
  ErrorResponse extends boolean = false
>(
  config: ApiIntegrationConfig<Api>,
  params: ApiParams<Api>,
  extraParams: ExtraParams<TracingMeta>,
  returnErrorAsJson?: ErrorResponse
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

  const cmd = async () => {
    const response = await fetch(endpointWithQuery, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(extraParams?.basicAuth ? getBasicAuthHeader(extraParams.basicAuth) : {}),
        ...(headers ? headers : {}),
      },
      ...(!['GET', 'HEAD'].includes(method) ? { body: JSON.stringify(body) } : {}),
    }).catch((e) => {
      throw new PlatformFault({ code: 'FAULT_API_CALL_NETWORK', detail: e.message }).returnException();
    });

    if (!response.ok) {
      if (returnErrorAsJson) {
        const errorResponse: Api['errorResponse'] = await response.json();
        return { errorResponse };
      }
      throw new PlatformFault({ code: 'FAULT_API_CALL_INVALID_RESPONSE', detail: await response.text() });
    }
    return (await response.json()) as Api['response'];
  };
  return await Tracing.traceableOp(
    'ApiCall',
    'FAULT_API_CALL_UNHANDLED',
    endpointWithQuery,
    cmd,
    extraParams.tracingMeta
  );
};

const getBasicAuthHeader = (basicAuth: BasicAuth) => {
  return {
    Authorization: 'Basic ' + Buffer.from(basicAuth?.user + ':' + basicAuth?.pass).toString('base64'),
  };
};

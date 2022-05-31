import fetch from 'node-fetch';
import { ApiConfig } from '../../catalog/api/api-config';
import { ApiInterfaceExtended, ApiInterface } from '../../catalog/api/api-interface';

export type ApiParams<Api extends ApiInterfaceExtended> = Partial<Omit<Api, 'response' | 'claims'>>;

export type BasicAuth = {
  user: string;
  pass: string;
};

export const callApi = async <Api extends ApiInterfaceExtended>(
  config: ApiConfig<ApiInterface>,
  { body = {}, pathParams = {}, queryParams = {}, headers = {} }: ApiParams<Api>,
  basicAuth?: BasicAuth
): Promise<Api['response']> => {
  const { baseUrl, basePath, path, method } = config;
  const querystring = !queryParams
    ? ''
    : Object.keys(queryParams)
        .map((key) => `${key}=${queryParams[key]}`)
        .join('&')
        .replace(/^([^?])/g, '?$1');

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  let endpoint = baseUrl!;
  endpoint += basePath != '' ? basePath.replace(/^([^/])/g, '/$1') : '';
  endpoint += path != '' ? path.replace(/^([^/])/g, '/$1') : '';
  endpoint += querystring;

  if (pathParams)
    Object.keys(pathParams).forEach((pathP) => {
      endpoint = endpoint.replace(`{${pathP}}`, pathParams[pathP] as string);
    });

  const response = await fetch(endpoint, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(basicAuth ? getBasicAuthHeader(basicAuth) : {}),
      ...(headers ? headers : {}),
    },
    ...(!['GET', 'HEAD'].includes(method) ? { body: JSON.stringify(body) } : {}),
  });
  return (await response.json()) as Api['response'];
};

const getBasicAuthHeader = (basicAuth: BasicAuth) => {
  return {
    Authorization: 'Basic ' + Buffer.from(basicAuth?.user + ':' + basicAuth?.pass).toString('base64'),
  };
};

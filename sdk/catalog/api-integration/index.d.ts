import { ApiMethod } from '../api';
export type ApiIntegrationInterfaceKeys = {
    response: unknown;
    body: unknown;
    pathParams: Record<string, unknown>;
    queryParams: Record<string, unknown>;
    headers: Record<string, unknown>;
    errorResponse: unknown;
};
export type ApiIntegrationInterface<keys extends ApiIntegrationInterfaceKeys = ApiIntegrationInterfaceKeys> = {
    response: keys['response'];
    body: keys['body'];
    pathParams: keys['pathParams'];
    queryParams: keys['queryParams'];
    headers: keys['headers'];
    errorResponse: keys['errorResponse'];
};
export type ApiIntegrationConfig<T extends ApiIntegrationInterface> = {
    method: ApiMethod;
    url: string;
};

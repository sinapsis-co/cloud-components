import { EmptyObject } from 'catalog/api';
import { ApiIntegrationInterface } from 'catalog/api-integration';
type NotEmptyObjects<T> = {
    [P in keyof T]: Exclude<T[P], undefined> extends EmptyObject ? never : P;
}[keyof T];
type ApiParams<Api extends ApiIntegrationInterface> = Omit<Pick<Api, NotEmptyObjects<Api>>, 'response' | 'errorResponse' | 'claims'>;
export type BasicAuth = {
    user: string;
    pass: string;
};
export type Options<TracingMeta extends Record<string, string>, ErrorResponse extends boolean, IgnoreResponse extends boolean> = {
    tracingMeta: TracingMeta;
    returnErrorResponse?: ErrorResponse;
    ignoreResponse?: IgnoreResponse;
    basicAuth?: BasicAuth;
    timeout?: number;
};
type Response<Api extends ApiIntegrationInterface, ErrorResponse extends boolean, IgnoreResponse extends boolean> = IgnoreResponse extends true ? undefined : ErrorResponse extends true ? {
    response?: Api['response'];
    errorResponse?: Api['errorResponse'];
    statusCode: number;
} : {
    response: Api['response'];
};
export declare const apiCall: <Api extends ApiIntegrationInterface, TracingMeta extends Record<string, string>, ErrorResponse extends boolean, IgnoreResponse extends boolean>(config: ApiIntegrationConfig<Api>, params: ApiParams<Api>, options: Options<TracingMeta, ErrorResponse, IgnoreResponse>) => Promise<Response<Api, ErrorResponse, IgnoreResponse>>;
export {};

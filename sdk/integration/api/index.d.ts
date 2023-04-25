import { EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { ApiIntegrationConfig, ApiIntegrationInterface } from '@sinapsis-co/cc-sdk/catalog/api-integration';
type NotEmptyObjects<T> = {
    [P in keyof T]: Exclude<T[P], undefined> extends EmptyObject ? never : P;
}[keyof T];
type ApiParams<Api extends ApiIntegrationInterface> = Omit<Pick<Api, NotEmptyObjects<Api>>, 'response' | 'errorResponse' | 'claims'>;
export type BasicAuth = {
    user: string;
    pass: string;
};
export type Options<TracingMeta, ErrorResponse> = {
    basicAuth?: BasicAuth;
    tracingMeta: TracingMeta;
    returnErrorResponse?: ErrorResponse;
    timeout?: number;
};
type Response<Api extends ApiIntegrationInterface, ErrorResponse extends boolean> = ErrorResponse extends true ? {
    response?: Api['response'];
    errorResponse?: Api['errorResponse'];
    statusCode: number;
} : {
    response: Api['response'];
};
export declare const apiCall: <Api extends ApiIntegrationInterface, TracingMeta extends Record<string, string> = Record<string, string>, ErrorResponse extends boolean = false>(config: ApiIntegrationConfig<Api>, params: ApiParams<Api>, options: Options<TracingMeta, ErrorResponse>) => Promise<Response<Api, ErrorResponse>>;
export {};

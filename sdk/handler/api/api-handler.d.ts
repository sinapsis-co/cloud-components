import type { APIGatewayProxyEventV2WithJWTAuthorizer } from 'aws-lambda';
import { ApiConfig, ApiInterface, ApiInterfaceRequest } from 'catalog/api';
export declare const DEFAULT_HEADERS: {
    'Access-Control-Allow-Origin': string;
    'Access-Control-Allow-Headers': string;
    'Cache-Control': string;
    'Content-Type': string;
};
type Handler<T extends ApiInterface> = (event: APIGatewayProxyEventV2WithJWTAuthorizer, request: ApiInterfaceRequest<T>) => Promise<T['response']>;
export declare const apiHandler: <T extends ApiInterface>(handler: Handler<T>, apiOptions: ApiConfig<T>, customHeaders?: APIGatewayProxyEventV2WithJWTAuthorizer['headers'], statusCode?: number) => Handler<T>;
export {};

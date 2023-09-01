import { ApiInterface, ApiInterfaceRequest } from '@sinapsis-co/cc-sdk/catalog/api';
import { APIGatewayProxyEventV2WithJWTAuthorizer } from 'aws-lambda';

export type SuccessfulAuthorizationResult<ExtraData> = { authorized: true } & ExtraData;
export type FailedAuthorizationResult<ExtraData> = { authorized: false } & Partial<ExtraData>;
export type AuthorizerResult<ExtraData = object> =
  | SuccessfulAuthorizationResult<ExtraData>
  | FailedAuthorizationResult<ExtraData>;

export type AuthorizerFunction<T extends ApiInterface, AuthorizerData = object> = (
  event: APIGatewayProxyEventV2WithJWTAuthorizer,
  request: ApiInterfaceRequest<T>
) => Promise<AuthorizerResult<AuthorizerData>>;

import { APIGatewayProxyEventV2WithJWTAuthorizer } from 'aws-lambda';
import { Schemy } from 'schemy-ts';

export type EmptyObject = Record<string, null | undefined>;

export type ApiInterfaceKeys = {
  response: unknown;
  body: unknown;
  pathParams: Record<string, unknown>;
  queryParams: Record<string, unknown>;
  claims: Record<string, unknown>;
};

export type ApiInterface<keys extends ApiInterfaceKeys = ApiInterfaceKeys> = {
  response: keys['response'];
  body: keys['body'];
  pathParams: keys['pathParams'];
  queryParams: keys['queryParams'];
  claims: keys['claims'];
};

type OmittedProps<T extends ApiInterfaceKeys> = Pick<ApiInterface<T>, 'response'>;
export type ApiInterfaceRequest<T extends ApiInterfaceKeys = ApiInterfaceKeys> = Omit<ApiInterface<T>, keyof OmittedProps<T>>;

// Maps the input list of DynamoDB interface
export type PaginatedQueryParams = {
  limit?: string;
  nextToken?: string;
};

// Maps the output list of DynamoDB interface
export type PaginatedResponse<ResponseType> = {
  items: ResponseType[];
  nextToken: string | number | null;
};

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'ALL';

export type TablePermission = 'read' | 'write' | 'readWrite' | 'none';

export type ApiDefinition<Api extends ApiInterface> = {
  name: string;
  basePath: string;
  path: string;
  method: ApiMethod;
  isPublic?: true;
  baseUrl?: string;
  scope?: string;
  schema?: Schemy;
  tablePermission?: TablePermission;
  authorizationMdw?: (event: APIGatewayProxyEventV2WithJWTAuthorizer, request: ApiInterfaceRequest<Api>, scope?: string) => Promise<void> | void;
};

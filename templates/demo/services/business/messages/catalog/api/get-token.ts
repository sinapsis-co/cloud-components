import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';

export type Interface = ApiInterface<{
  response: { token: string; ttl: number };
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-get-token',
  method: 'GET',
  basePath: 'messages',
  path: '/token',
  tablePermission: 'none',
};

import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/identity/entities';

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

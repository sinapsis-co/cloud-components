import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';

export type Interface = ApiInterface<{
  response: { url: string };
  pathParams: EmptyObject;
  body: { country: string };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-link-connect',
  method: 'POST',
  basePath: 'connect',
  path: '/',
  tablePermission: 'readWrite',
};

import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { User } from 'services/business/identity/entities/user';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: User;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-user-get',
  method: 'GET',
  basePath: 'identity',
  path: '/user',
  tablePermission: 'read',
  scope: authScope.member,
  authorizationMdw: authMdw,
};
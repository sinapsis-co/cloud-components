import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';

import { UserClaims } from '../../entities/user-cognito';
import { User } from '../../model/user';
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

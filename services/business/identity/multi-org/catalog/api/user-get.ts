import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';

import { authScope } from '../../entities/role';
import { UserClaims } from '../../entities/user-cognito';
import { UserModel } from '../../model/user';
import { authMdw } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: UserModel['Entity'];
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-user-get',
  method: 'GET',
  basePath: 'identity',
  path: '/user',
  tablePermission: 'read',
  scope: authScope.guest,
  authorizationMdw: authMdw,
};

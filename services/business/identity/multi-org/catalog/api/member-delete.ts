import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';

import { authScope } from '../../entities/role';
import { UserClaims } from '../../entities/user-cognito';
import { UserModel } from '../../model/user';
import { authMdw } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: UserModel['Entity'];
  pathParams: { orgId: string; userId: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-member-delete',
  method: 'DELETE',
  basePath: 'identity',
  path: 'org/{orgId}/member/{userId}',
  tablePermission: 'write',
  scope: authScope.owner,
  authorizationMdw: authMdw,
};

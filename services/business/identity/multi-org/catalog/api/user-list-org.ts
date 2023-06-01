import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';

import { authScope } from '../../entities/role';
import { UserClaims } from '../../entities/user-cognito';
import { OrgUserModel } from '../../model/org-user';
import { authMdw } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: OrgUserModel['List'];
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-user-list-orgs',
  method: 'GET',
  basePath: 'identity',
  path: '/user/org',
  tablePermission: 'read',
  scope: authScope.guest,
  authorizationMdw: authMdw,
};

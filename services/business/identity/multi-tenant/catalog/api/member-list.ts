import * as api from '@sinapsis-co/cc-sdk/catalog/api';

import { UserClaims } from '../../entities/user-cognito';
import { InviteModel } from '../../model/invite';
import { UserModel } from '../../model/user';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = api.ApiInterface<{
  response: api.PaginatedResponse<UserModel['Entity'] | InviteModel['Entity']>;
  pathParams: api.EmptyObject;
  body: api.EmptyObject;
  claims: UserClaims;
  queryParams: api.PaginatedQueryParams & { filter?: 'users' | 'invite' };
}>;

export const definition: api.ApiDefinition<Interface> = {
  name: 'api-member-list',
  method: 'GET',
  basePath: 'identity',
  path: '/member',
  tablePermission: 'read',
  scope: authScope.member,
  authorizationMdw: authMdw,
};

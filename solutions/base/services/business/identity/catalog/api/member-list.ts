import * as api from '@sinapsis-co/cc-sdk/catalog/api';

import { Invite } from '../../entities/invite';
import { User } from '../../entities/user';
import { UserClaims } from '../../entities/user-cognito';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = api.ApiInterface<{
  response: api.PaginatedResponse<User | Invite>;
  pathParams: api.EmptyObject;
  body: api.EmptyObject;
  claims: UserClaims;
  queryParams: api.PaginatedQueryParams & { filter?: 'users' | 'invite' };
}>;

export const config: api.ApiConfig<Interface> = {
  name: 'api-member-list',
  method: 'GET',
  basePath: 'identity',
  path: '/member',
  tablePermission: 'read',
  scope: authScope.member,
  authorizationMdw: authMdw,
};

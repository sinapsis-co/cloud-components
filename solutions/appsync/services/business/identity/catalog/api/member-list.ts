import * as api from '@sinapsis-co/cc-sdk/catalog/api';

import { UserClaims } from '../../entities/user-cognito';
import { Invite } from '../../model/invite';
import { User } from '../../model/user';
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

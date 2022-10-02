import {
  ApiInterface,
  EmptyObject,
  ApiConfig,
  PaginatedResponse,
  PaginatedQueryParams,
} from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { UserProfile } from '../../entities/user-profile';
import { authScope, authMdw } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: PaginatedResponse<UserProfile>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams & { filter?: 'users' | 'pending' };
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-member-list',
  method: 'GET',
  basePath: 'identity',
  path: '/member',
  tablePermission: 'read',
  scope: authScope.member,
  authorizationMdw: authMdw,
};

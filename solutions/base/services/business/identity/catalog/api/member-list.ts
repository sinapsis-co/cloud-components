import {
  ApiConfig,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-sdk/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { User } from '../../entities/user';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: PaginatedResponse<User>;
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

import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { UserProfile } from 'services/business/identity/entities/user-profile';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: UserProfile;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-profile-get',
  method: 'GET',
  basePath: 'identity',
  path: '/me',
  tablePermission: 'read',
  scope: authScope.member,
  authorizationMdw: authMdw,
};

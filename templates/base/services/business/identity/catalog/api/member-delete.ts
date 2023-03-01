import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserProfile } from 'services/business/identity/entities/user-profile';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: UserProfile;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-member-delete',
  method: 'DELETE',
  basePath: 'identity',
  path: '/member/{id}',
  tablePermission: 'write',
  scope: authScope.owner,
  authorizationMdw: authMdw,
};

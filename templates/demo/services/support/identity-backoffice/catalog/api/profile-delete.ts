import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { UserProfile } from 'services/business/identity/entities/user-profile';

export type Interface = ApiInterface<{
  response: UserProfile;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-profile-delete',
  method: 'DELETE',
  basePath: 'identity-backoffice',
  path: '/me',
  tablePermission: 'write',
};

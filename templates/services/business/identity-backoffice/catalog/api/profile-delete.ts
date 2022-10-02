import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserProfile } from 'services/business/identity/entities/user-profile';
import { UserClaims } from 'services/business/identity/entities/user-cognito';

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
  basePath: 'identity',
  path: '/me',
  tablePermission: 'write',
};

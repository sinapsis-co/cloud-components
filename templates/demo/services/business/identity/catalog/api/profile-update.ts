import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserProfile, UserProfileUpdate } from 'services/business/identity/entities/user-profile';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { authScope, authMdw } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: UserProfile;
  pathParams: EmptyObject;
  body: UserProfileUpdate;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-profile-update',
  method: 'PUT',
  basePath: 'identity',
  path: '/me',
  tablePermission: 'write',
  scope: authScope.member,
  authorizationMdw: authMdw,
  schema: Schemy.schema<Interface['body']>({
    givenName: { type: String, required: true },
    familyName: { type: String, required: true },
  }),
};

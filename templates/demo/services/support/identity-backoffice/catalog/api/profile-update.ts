import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { UserProfile, UserProfileUpdate } from 'services/business/identity/entities/user-profile';

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
  basePath: 'identity-backoffice',
  path: '/me',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    givenName: { type: String, required: true },
    familyName: { type: String, required: true },
  }),
};

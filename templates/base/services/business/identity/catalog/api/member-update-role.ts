import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { UserProfile } from 'services/business/identity/entities/user-profile';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: UserProfile;
  pathParams: { id: string };
  body: Pick<UserProfile, 'role'>;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

// HINT: Only owners can change roles
export const config: ApiConfig<Interface> = {
  name: 'api-member-update-role',
  method: 'PUT',
  basePath: 'identity',
  path: '/member/{id}',
  tablePermission: 'write',
  scope: authScope.owner,
  authorizationMdw: authMdw,
  schema: Schemy.schema<Interface['body']>({
    role: { type: String, required: true },
  }),
};

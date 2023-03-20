import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { UserProfile } from 'services/business/identity/entities/user-profile';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: UserProfile;
  pathParams: EmptyObject;
  body: { email: string };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-member-create',
  method: 'POST',
  basePath: 'identity',
  path: '/member',
  tablePermission: 'readWrite',
  scope: authScope.owner,
  authorizationMdw: authMdw,
  schema: Schemy.schema<Interface['body']>({
    email: { type: String, required: true },
  }),
};

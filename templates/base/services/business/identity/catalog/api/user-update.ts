import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { User, UserUpdate } from 'services/business/identity/entities/user';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: User;
  pathParams: EmptyObject;
  body: UserUpdate;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-user-update',
  method: 'PUT',
  basePath: 'identity',
  path: '/user',
  tablePermission: 'write',
  scope: authScope.member,
  authorizationMdw: authMdw,
  schema: Schemy.schema<Interface['body']>({
    givenName: { type: String, required: true },
    familyName: { type: String, required: true },
  }),
};
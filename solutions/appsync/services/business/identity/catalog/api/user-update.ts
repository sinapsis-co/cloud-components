import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';

import { UserClaims } from '../../entities/user-cognito';
import { User, UserUpdate } from '../../model/user';
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

import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';

import { authScope } from '../../entities/role';
import { UserClaims } from '../../entities/user-cognito';
import { UserModel } from '../../model/user';
import { authMdw } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: UserModel['Entity'];
  pathParams: EmptyObject;
  body: UserModel['Update'];
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-user-update',
  method: 'PUT',
  basePath: 'identity',
  path: '/user',
  tablePermission: 'write',
  scope: authScope.guest,
  authorizationMdw: authMdw,
  schema: Schemy.schema<Interface['body']>({
    givenName: { type: String, required: false },
    familyName: { type: String, required: false },
    location: { type: Object, required: false },
  }),
};
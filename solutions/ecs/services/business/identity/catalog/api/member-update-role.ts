import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';

import { UserClaims } from '../../entities/user-cognito';
import { UserModel } from '../../model/user';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: UserModel['Entity'];
  pathParams: Pick<UserModel['Key'], 'id'>;
  body: Pick<UserModel['Entity'], 'role'>;
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

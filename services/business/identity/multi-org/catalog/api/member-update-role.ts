import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';

import { Role, authScope } from '../../entities/role';
import { UserClaims } from '../../entities/user-cognito';
import { UserModel } from '../../model/user';
import { authMdw } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: UserModel['Entity'];
  pathParams: Pick<UserModel['Key'], 'userId'>;
  body: { orgId: string; role: Role };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

// HINT: Only owners can change roles
export const definition: ApiDefinition<Interface> = {
  name: 'api-member-update-role',
  method: 'PUT',
  basePath: 'identity',
  path: '/member/{userId}',
  tablePermission: 'write',
  scope: authScope.owner,
  authorizationMdw: authMdw,
  schema: Schemy.schema<Interface['body']>({
    orgId: { type: String, required: true },
    role: { type: String, required: true },
  }),
};

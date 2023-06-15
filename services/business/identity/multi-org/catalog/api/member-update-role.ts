import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';

import { Role, authScope } from '../../entities/role';
import { UserClaims } from '../../entities/user-cognito';
import { OrgUserModel } from '../../model/org-user';
import { authMdw } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: OrgUserModel['Entity'];
  pathParams: { orgId: string; userId: string };
  body: { role: Role };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

// HINT: Only owners can change roles
export const definition: ApiDefinition<Interface> = {
  name: 'api-member-update-role',
  method: 'PUT',
  basePath: 'identity',
  path: 'org/{orgId}/member/{userId}',
  tablePermission: 'write',
  scope: authScope.owner,
  authorizationMdw: authMdw,
  schema: Schemy.schema<Interface['body']>({
    role: { type: String, required: true },
  }),
};

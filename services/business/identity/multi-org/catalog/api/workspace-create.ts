import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';

import { authScope } from '../../entities/role';
import { UserClaims } from '../../entities/user-cognito';
import { WorkspaceModel } from '../../model/workspace';
import { authMdw } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: WorkspaceModel['Entity'];
  pathParams: { orgId: string };
  body: WorkspaceModel['Create'];
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-workspace-create',
  method: 'POST',
  basePath: 'identity',
  path: '/org/{orgId}/workspace',
  tablePermission: 'write',
  scope: authScope.owner,
  authorizationMdw: authMdw,
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: true },
  }),
};

import { ApiDefinition, ApiInterface, EmptyObject, PaginatedQueryParams } from '@sinapsis-co/cc-sdk/catalog/api';

import { authScope } from '../../entities/role';
import { UserClaims } from '../../entities/user-cognito';
import { WorkspaceModel } from '../../model/workspace';
import { authMdw } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: WorkspaceModel['List'];
  pathParams: { orgId: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-workspace-list',
  method: 'GET',
  basePath: 'identity',
  path: '/org/{orgId}/workspace',
  tablePermission: 'read',
  scope: authScope.member,
  authorizationMdw: authMdw,
};

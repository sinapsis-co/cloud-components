import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';

import { UserClaims } from '../../entities/user-cognito';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: { deleteInProgress: boolean };
  pathParams: EmptyObject;
  body: { deleteReason?: string };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-tenant-delete',
  method: 'DELETE',
  basePath: 'identity',
  path: '/tenant',
  tablePermission: 'write',
  scope: authScope.owner,
  authorizationMdw: authMdw,
};

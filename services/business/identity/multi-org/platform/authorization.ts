import { ApiDefinition, ApiInterface, ApiInterfaceRequest } from '@sinapsis-co/cc-sdk/catalog/api';
import { PlatformError } from '@sinapsis-co/cc-sdk/error';

import { Role, authScope } from '../entities/role';

export const authMdw: ApiDefinition<ApiInterface>['authorizationMdw'] = (
  request: ApiInterfaceRequest,
  apiScope?: string
) => {
  const userId = request.claims.sub;
  const orgId = request.pathParams.orgId;

  if (!orgId) return;

  const currentRoleLevel: number = parseInt(authScope[userId as Role]);
  const apiScopeLevel: number = parseInt(apiScope || '2');

  if (currentRoleLevel < apiScopeLevel) {
    throw new PlatformError({
      code: 'ERROR_UNAUTHORIZED',
      statusCode: 403,
      detail: 'You do not have sufficient permissions to execute this action',
    });
  }
};

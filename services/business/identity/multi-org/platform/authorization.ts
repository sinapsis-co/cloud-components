import { ApiDefinition, ApiInterface, ApiInterfaceRequest } from '@sinapsis-co/cc-sdk/catalog/api';
import { PlatformError } from '@sinapsis-co/cc-sdk/error';

export type AuthScope = 'owner' | 'member' | 'guest';

export const authScope: Record<AuthScope, string> = {
  owner: '2',
  member: '1',
  guest: '0',
};

export const authMdw: ApiDefinition<ApiInterface>['authorizationMdw'] = (
  request: ApiInterfaceRequest,
  apiScope?: string
) => {
  const userId = request.claims.sub;
  const orgId = request.pathParams.orgId;

  if (!orgId) return;

  const currentRoleLevel: number = parseInt(authScope[userId as AuthScope]);
  const apiScopeLevel: number = parseInt(apiScope || '2');

  if (currentRoleLevel < apiScopeLevel) {
    throw new PlatformError({
      code: 'ERROR_UNAUTHORIZED',
      statusCode: 403,
      detail: 'You do not have sufficient permissions to execute this action',
    });
  }
};

import { ApiDefinition, ApiInterface, ApiInterfaceRequest } from '@sinapsis-co/cc-sdk/catalog/api';
import { PlatformError } from '@sinapsis-co/cc-sdk/error';

export type AuthScope = 'owner' | 'member';

export const authScope: Record<AuthScope, string> = {
  owner: '2',
  member: '1',
};

export const authMdw: ApiDefinition<ApiInterface>['authorizationMdw'] = (
  request: ApiInterfaceRequest,
  apiScope?: string
) => {
  const currentRoleLevel: number = parseInt(authScope[request.claims.role as AuthScope]);
  const apiScopeLevel: number = parseInt(apiScope || '1');

  if (currentRoleLevel < apiScopeLevel) {
    throw new PlatformError({
      code: 'ERROR_UNAUTHORIZED',
      statusCode: 403,
      detail: 'You do not have sufficient permissions to execute this action',
    });
  }
};

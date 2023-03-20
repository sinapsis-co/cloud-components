import { ApiConfig, ApiInterface, ApiInterfaceRequest } from '@sinapsis-co/cc-platform/catalog/api';
import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';

export type AuthScope = 'admin' | 'staff';

export const authScope: Record<AuthScope, string> = {
  admin: '0',
  staff: '1',
};

export const authMdw: ApiConfig<ApiInterface>['authorizationMdw'] = (
  request: ApiInterfaceRequest,
  apiScope?: string
) => {
  const inputLevel: number = parseInt(authScope[request.claims.role as AuthScope]);
  const apiLevel: number = parseInt(apiScope || '1');

  if (inputLevel > apiLevel) {
    throw new ApiError('Unauthorized', 403, 'You do not have sufficient permissions to execute this action');
  }
};

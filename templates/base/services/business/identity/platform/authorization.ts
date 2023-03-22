import { ApiConfig, ApiInterface, ApiInterfaceRequest } from '@sinapsis-co/cc-platform/catalog/api';
import { HandledError } from '@sinapsis-co/cc-platform/util/handled-exception';

export type AuthScope = 'owner' | 'member';

export const authScope: Record<AuthScope, string> = {
  owner: '0',
  member: '1',
};

export const authMdw: ApiConfig<ApiInterface>['authorizationMdw'] = (
  request: ApiInterfaceRequest,
  apiScope?: string
) => {
  const inputLevel: number = parseInt(authScope[request.claims.role as AuthScope]);
  const apiLevel: number = parseInt(apiScope || '1');

  if (inputLevel > apiLevel) {
    throw new HandledError({
      code: 'ERROR_UNAUTHORIZED',
      statusCode: 403,
      detail: 'You do not have sufficient permissions to execute this action',
    });
  }
};

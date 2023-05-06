import { ApiConfig, ApiInterface, ApiInterfaceRequest } from '@sinapsis-co/cc-sdk/catalog/api';
import { CustomError } from '../../../../config/error-catalog';

export type AuthScope = 'premium' | 'guest' | 'user';

export const authScope: Record<AuthScope, string> = {
  premium: '0',
  guest: '1',
  user: '2',
};

export const authMdw: ApiConfig<ApiInterface>['authorizationMdw'] = (
  request: ApiInterfaceRequest,
  apiScope?: string
) => {
  const inputLevel: number = parseInt(authScope[request.claims.role as AuthScope]);
  const apiLevel: number = parseInt(apiScope || '1');

  if (inputLevel > apiLevel) {
    throw new CustomError({
      code: 'ERROR_UNAUTHORIZED',
      statusCode: 403,
      detail: 'You do not have sufficient permissions to execute this action',
    });
  }
};

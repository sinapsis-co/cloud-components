import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Balance } from '../../entities/balance';

export type Interface = ApiInterface<{
  response: Omit<Balance, 'tenantId'>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-get-balance',
  method: 'GET',
  basePath: 'balance',
  path: '/',
  tablePermission: 'read',
};

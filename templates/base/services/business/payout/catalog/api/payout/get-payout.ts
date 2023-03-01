import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Payout } from '../../../entities/payout';

export type Interface = ApiInterface<{
  response: Payout;
  pathParams: { id: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-get-payout',
  method: 'GET',
  basePath: 'payout',
  path: '/{id}',
  tablePermission: 'read',
};

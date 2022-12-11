import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/identity/entities/user-cognito';
import { Order } from '../../entities';

export type Interface = ApiInterface<{
  response: Order;
  pathParams: { orderId: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-get-order',
  method: 'GET',
  basePath: 'order',
  path: '/{orderId}',
  tablePermission: 'read',
};

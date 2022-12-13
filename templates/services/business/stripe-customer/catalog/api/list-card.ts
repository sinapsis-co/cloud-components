import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import StripeClient from 'stripe';

export type Interface = ApiInterface<{
  response: StripeClient.PaymentMethod[];
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-list-card',
  method: 'GET',
  basePath: 'customer',
  path: '/cards',
  tablePermission: 'read',
};

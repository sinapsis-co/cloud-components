import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/identity/entities';
import StripeClient from 'stripe';

export type Interface = ApiInterface<{
  response: { customer: StripeClient.Customer; listPaymentMethods: StripeClient.PaymentMethod[] };
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-get-customer',
  method: 'GET',
  basePath: 'customer',
  path: '/',
  tablePermission: 'read',
};

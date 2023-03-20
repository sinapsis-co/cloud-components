import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
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
  basePath: 'customer-gateway',
  path: '/',
  tablePermission: 'read',
};

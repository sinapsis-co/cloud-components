import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Price, Product } from 'services/business/stripe-product/entities';
import { Subscription } from '../../entities/subscription';

export type Interface = ApiInterface<{
  response: Subscription;
  pathParams: EmptyObject;
  body: {
    product: Omit<Product, 'prices'>;
    price: Price;
    paymentMethodId?: string;
    coupon?: string;
  };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-update-subscription',
  method: 'PUT',
  basePath: 'stripe-subscription',
  path: '/',
  tablePermission: 'readWrite',
  schema: Schemy.schema<Interface['body']>({
    product: {
      type: Object,
      required: true,
    },
    price: {
      type: Object,
      required: true,
    },
    paymentMethodId: {
      type: String,
      required: false,
    },
    coupon: {
      type: String,
      required: false,
    },
  }),
};

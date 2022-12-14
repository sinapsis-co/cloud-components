import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Subscription } from '../../entities/subscription';

export type Interface = ApiInterface<{
  response: Subscription;
  pathParams: EmptyObject;
  body: {
    orderId: string;
    paymentMethodId?: string;
  };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-subscription',
  method: 'POST',
  basePath: 'stripe-subscription',
  path: '/',
  tablePermission: 'readWrite',
  schema: Schemy.schema<Interface['body']>({
    orderId: {
      type: String,
      required: true,
    },

    paymentMethodId: {
      type: String,
      required: false,
    },
  }),
};

import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Payment } from '../../entities';

export type Interface = ApiInterface<{
  response: Payment;
  pathParams: EmptyObject;
  body: {
    orderId: string;
    paymentMethodId?: string;
  };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-payment',
  method: 'POST',
  basePath: 'payment',
  path: '/',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    paymentMethodId: {
      type: String,
      required: false,
    },
    orderId: {
      type: String,
      required: true,
    },
  }),
};

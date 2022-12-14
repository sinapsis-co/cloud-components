import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Order } from '../../entities';
import { OrderItem } from '../../entities/order-item';

export type BodyCreateIncome = {
  isSubscription?: boolean;
  orderItem: OrderItem[];
};

export type Interface = ApiInterface<{
  response: Order;
  pathParams: EmptyObject;
  body: BodyCreateIncome;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-order-income',
  method: 'POST',
  basePath: 'order',
  path: '/',
  tablePermission: 'readWrite',
  schema: Schemy.schema<Interface['body']>({
    isSubscription: {
      type: Boolean,
      required: false,
    },
    orderItem: {
      type: Array,
    },
  }),
};

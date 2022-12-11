import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { UserClaims } from 'services/identity/entities/user-cognito';
import { OrderWithdrawal } from 'services/order/entities';
import { Order } from '../../entities';

export type BodyCreateWithdrawal = {
  orderAmount: OrderWithdrawal['orderAmount'];
  orderPayoutSettingId: OrderWithdrawal['orderPayoutSettingId'];
};
export type Interface = ApiInterface<{
  response: Order;
  pathParams: EmptyObject;
  body: BodyCreateWithdrawal;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-order-withdrawal',
  method: 'POST',
  basePath: 'order',
  path: '/withdrawal',
  tablePermission: 'readWrite',
  schema: Schemy.schema<Interface['body']>({
    orderAmount: {
      type: Number,
      required: true,
      min: 1,
    },
    orderPayoutSettingId: {
      type: String,
      required: true,
    },
  }),
};

import { ApiConfig, ApiInterface } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Order, OrderIncome } from '../../entities';
import { frequencyTypes, OrderItem } from '../../entities/order-item';

export type Interface = ApiInterface<{
  response: Order & OrderIncome;
  pathParams: { orderId: string };
  body: Pick<OrderItem, 'orderQuantity' | 'orderFrequency'>;
  claims: UserClaims;
  queryParams: { orderItemNumber: string };
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-update-item-order-income',
  method: 'PUT',
  basePath: 'order',
  path: '/item/{orderId}',
  tablePermission: 'readWrite',
  schema: Schemy.schema<Interface['body']>({
    orderQuantity: {
      type: Number,
      required: true,
      min: 1,
    },
    orderFrequency: {
      type: String,
      required: true,
      enum: frequencyTypes,
    },
  }),
};

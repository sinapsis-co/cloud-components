import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { UserClaims } from 'services/identity/entities/user-cognito';
import { Order } from '../../entities';
import { frequencyTypes, OrderItem } from '../../entities/order-item';

export type BodyCreateIncome = {
  skillId: string;
  skillerId: string;
  orderFrequency: OrderItem['orderFrequency'];
  orderQuantity: OrderItem['orderQuantity'];
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
    skillId: {
      type: String,
      required: true,
    },
    skillerId: {
      type: String,
      required: true,
    },
    orderQuantity: {
      type: Number,
      required: true,
      min: 1,
      custom: (value: string) => {
        if (Number(value) % 1 !== 0) {
          return 'OrderQuantity must be an integer or is negative';
        }
        return true;
      },
    },
    orderFrequency: {
      type: String,
      enum: frequencyTypes,
      required: true,
    },
  }),
};

import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Order } from '../../entities';

export type BodyCreateIncome = {
 orderQuantity: number;
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
  }),
};

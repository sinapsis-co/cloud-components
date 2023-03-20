import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Inventory, InventoryCreate } from '../../entities';

export type Interface = ApiInterface<{
  response: Inventory;
  pathParams: EmptyObject;
  body: InventoryCreate;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-inventory',
  method: 'POST',
  basePath: 'inventories',
  path: '/',
  tablePermission: 'readWrite',
  schema: Schemy.schema<Interface['body']>({
    placeId: { type: String, required: true },
    productId: { type: String, required: true },
  }),
};

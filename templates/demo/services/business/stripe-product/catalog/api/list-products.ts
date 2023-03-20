import { ApiConfig, ApiInterface, EmptyObject, PaginatedResponse } from '@sinapsis-co/cc-platform/catalog/api';
import { Product } from '../../entities/product';

export type Interface = ApiInterface<{
  response: PaginatedResponse<Product>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: { tenantId: string };
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-list-products',
  method: 'GET',
  basePath: 'stripe-product',
  path: '/',
  tablePermission: 'read',
};

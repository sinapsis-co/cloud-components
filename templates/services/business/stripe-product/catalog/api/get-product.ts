import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Product } from '../../entities/product';

export type Interface = ApiInterface<{
  response: Product;
  pathParams: {
    productId: string;
  };
  body: EmptyObject;
  claims: { tenantId: string };
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-get-product',
  method: 'GET',
  basePath: 'product',
  path: '/{productId}',
  tablePermission: 'read',
};

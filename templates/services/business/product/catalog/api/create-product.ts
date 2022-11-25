import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Product, ProductCreate } from '../../entities';

export type Interface = ApiInterface<{
  response: Product;
  pathParams: EmptyObject;
  body: ProductCreate;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-product',
  method: 'POST',
  basePath: 'products',
  path: '/',
  tablePermission: 'readWrite',
  isPublic: true,
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: true },
    categoryId: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: false },
    image: { type: String, required: false },
    brand: { type: String, required: false },
    color: { type: String, required: false },
    material: { type: String, required: false },
    size: { type: String, required: false },
    width: { type: String, required: false },
    height: { type: String, required: false },
    weight: { type: String, required: false },
    countryOfOrigin: { type: String, required: false },
  }),
};

import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Product, ProductUpdate } from '../../entities';

export type Interface = ApiInterface<{
    response: Product;
    pathParams: { id: string };
    body: ProductUpdate;
    claims: UserClaims;
    queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
    name: 'api-update-product',
    method: 'PUT',
    basePath: 'products',
    path: '/{id}',
    tablePermission: 'readWrite',
};

import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Product } from '../../entities';

export type Interface = ApiInterface<{
    response: Product;
    pathParams: { id: string };
    body: EmptyObject;
    claims: UserClaims;
    queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
    name: 'api-get-product',
    method: 'GET',
    basePath: 'products',
    path: '/{id}',
    tablePermission: 'read',
    isPublic: true
};

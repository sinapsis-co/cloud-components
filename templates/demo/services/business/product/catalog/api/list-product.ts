import { ApiConfig, ApiInterface, EmptyObject, PaginatedQueryParams, PaginatedResponse } from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Product } from '../../entities';

export type Interface = ApiInterface<{
    response: PaginatedResponse<Product>;
    pathParams: EmptyObject;
    body: EmptyObject;
    claims: UserClaims;
    queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
    name: 'api-list-product',
    method: 'GET',
    basePath: 'products',
    path: '/',
    tablePermission: 'read',
};

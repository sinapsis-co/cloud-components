import { ApiConfig, ApiInterface, PaginatedQueryParams } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { ProductStore } from '../../entities';

export type Interface = ApiInterface<{
    response: Record<string, unknown>;
    pathParams: { id: string };
    body: ProductStore[];
    claims: UserClaims;
    queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
    name: 'api-list-product',
    method: 'GET',
    basePath: 'products',
    path: '/',
    tablePermission: 'read',
    isPublic: true
};

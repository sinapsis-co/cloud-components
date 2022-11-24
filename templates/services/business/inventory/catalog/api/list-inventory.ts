import { ApiConfig, ApiInterface, EmptyObject, PaginatedQueryParams, PaginatedResponse } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Inventory } from '../../entities';

export type Interface = ApiInterface<{
    response: PaginatedResponse<Inventory>;
    pathParams: EmptyObject;
    body: EmptyObject;
    claims: UserClaims;
    queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
    name: 'api-list-inventory',
    method: 'GET',
    basePath: 'inventories',
    path: '/',
    tablePermission: 'read',
    isPublic: true
};

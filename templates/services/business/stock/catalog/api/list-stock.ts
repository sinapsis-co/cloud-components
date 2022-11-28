import { ApiConfig, ApiInterface, EmptyObject, PaginatedQueryParams, PaginatedResponse } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Stock } from '../../entities';

export type Interface = ApiInterface<{
    response: PaginatedResponse<Stock>;
    pathParams: EmptyObject;
    body: EmptyObject;
    claims: UserClaims;
    queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
    name: 'api-list-stock',
    method: 'GET',
    basePath: 'stocks',
    path: '/',
    tablePermission: 'read',
};

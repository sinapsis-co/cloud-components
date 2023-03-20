import { ApiConfig, ApiInterface, EmptyObject, PaginatedQueryParams, PaginatedResponse } from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Place } from '../../entities';

export type Interface = ApiInterface<{
    response: PaginatedResponse<Place>;
    pathParams: EmptyObject;
    body: EmptyObject;
    claims: UserClaims;
    queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
    name: 'api-list-place',
    method: 'GET',
    basePath: 'places',
    path: '/',
    tablePermission: 'read',
};

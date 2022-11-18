import { ApiConfig, ApiInterface, PaginatedQueryParams } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { PlaceStore } from '../../entities';

export type Interface = ApiInterface<{
    response: Record<string, unknown>;
    pathParams: { id: string };
    body: PlaceStore;
    claims: UserClaims;
    queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
    name: 'api-get-place',
    method: 'GET',
    basePath: 'places',
    path: '/{id}',
    tablePermission: 'read',
    isPublic: true
};

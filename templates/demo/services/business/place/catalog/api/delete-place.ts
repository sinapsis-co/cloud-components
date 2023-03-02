import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Place } from '../../entities';

export type Interface = ApiInterface<{
    response: Place;
    pathParams: { id: string };
    body: EmptyObject;
    claims: UserClaims;
    queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
    name: 'api-delete-place',
    method: 'DELETE',
    basePath: 'places',
    path: '/{id}',
    tablePermission: 'readWrite',
};
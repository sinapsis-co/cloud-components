import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
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
    name: 'api-get-place',
    method: 'GET',
    basePath: 'places',
    path: '/{id}',
    tablePermission: 'read',
};

import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Stock } from '../../entities';

export type Interface = ApiInterface<{
    response: Stock;
    pathParams: { id: string };
    body: EmptyObject;
    claims: UserClaims;
    queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
    name: 'api-get-stock',
    method: 'GET',
    basePath: 'stocks',
    path: '/{id}',
    tablePermission: 'read',
    isPublic: true
};

import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Inventory } from '../../entities';

export type Interface = ApiInterface<{
    response: Inventory;
    pathParams: { id: string };
    body: EmptyObject;
    claims: UserClaims;
    queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
    name: 'api-get-inventory',
    method: 'GET',
    basePath: 'inventories',
    path: '/{id}',
    tablePermission: 'read',
    isPublic: true
};

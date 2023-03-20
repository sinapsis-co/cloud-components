import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Inventory } from '../../entities';

export type Interface = ApiInterface<{
    response: Inventory;
    pathParams: { id: string };
    body: {
        placeId: string
    };
    claims: UserClaims;
    queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
    name: 'api-update-inventory',
    method: 'PUT',
    basePath: 'inventories',
    path: '/{id}',
    tablePermission: 'readWrite',
    schema: Schemy.schema<Interface['body']>({
        placeId: { type: String, required: false }
    }),
};

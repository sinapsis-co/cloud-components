import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Inventory } from '../../entities';

export type Interface = ApiInterface<{
    response: Inventory;
    pathParams: { id: string };
    body: {
        status: 'AVAILABLE' | 'NOT_AVAILABLE' | 'EXPIRED' | 'DELETED',
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
        status: { type: String, required: false },
        placeId: { type: String, required: false }
    }),
};

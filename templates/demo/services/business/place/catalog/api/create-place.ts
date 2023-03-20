import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Place, PlaceCreate } from '../../entities';

export type Interface = ApiInterface<{
  response: Place,
  pathParams: EmptyObject;
  body: PlaceCreate;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-place',
  method: 'POST',
  basePath: 'places',
  path: '/',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: true },
    branchCode: { type: String, required: false },
    description: { type: String, required: false },
    address: { type: String, required: false },
    latitude: { type: Number, required: false },
    longitude: { type: Number, required: false },
    telephone: { type: String, required: false },
  }),
};

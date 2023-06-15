import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { LandingModel } from '../../model/landing';

export type Interface = ApiInterface<{
  response: LandingModel['Entity'];
  pathParams: LandingModel['Key'];
  body: LandingModel['Update'];
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-landing-update',
  method: 'PUT',
  basePath: 'landing',
  path: '/{id}',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: false },
    category: { type: String, required: false },
    price: { type: String, required: false },
    description: { type: String, required: false },
  }),
};

import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { IngredientModel } from '../../model/ingredient';

export type Interface = ApiInterface<{
  response: IngredientModel['Entity'];
  pathParams: IngredientModel['Key'];
  body: IngredientModel['Update'];
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-ingredient-update',
  method: 'PUT',
  basePath: 'ingredient',
  path: '/{id}',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: false },
    category: { type: String, required: false },
    measurement: { type: String, required: false },
    price: { type: String, required: false },
    description: { type: String, required: false },
  }),
};

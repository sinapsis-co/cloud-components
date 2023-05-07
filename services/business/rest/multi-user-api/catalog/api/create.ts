import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { IngredientModel } from '../../model/ingredient';

export type Interface = ApiInterface<{
  response: IngredientModel['Entity'];
  pathParams: EmptyObject;
  body: IngredientModel['Create'];
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-ingredient-create',
  method: 'POST',
  basePath: 'ingredient',
  path: '/',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: true },
    category: { type: String, required: true },
    measurement: { type: String, required: true },
    price: { type: String, required: false },
    description: { type: String, required: false },
  }),
};

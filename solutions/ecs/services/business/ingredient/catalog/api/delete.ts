import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { IngredientModel } from '../../model/ingredient';

export type Interface = ApiInterface<{
  response: IngredientModel['Entity'];
  pathParams: IngredientModel['Key'];
  body: EmptyObject;
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-ingredient-delete',
  method: 'DELETE',
  basePath: 'ingredient',
  path: '/{id}',
  tablePermission: 'write',
};

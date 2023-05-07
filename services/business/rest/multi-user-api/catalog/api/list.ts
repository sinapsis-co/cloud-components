import { ApiDefinition, ApiInterface, EmptyObject, PaginatedQueryParams } from '@sinapsis-co/cc-sdk/catalog/api';
import { IngredientModel } from '../../model/ingredient';

export type Interface = ApiInterface<{
  response: IngredientModel['List'];
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: EmptyObject;
  queryParams: PaginatedQueryParams;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-ingredient-list',
  method: 'GET',
  basePath: 'ingredient',
  path: '/',
  tablePermission: 'read',
};

import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Category } from '../../entities/category';

export type Interface = ApiInterface<{
  response: Category;
  pathParams: { id: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-categories-delete',
  method: 'DELETE',
  basePath: 'categories',
  path: '/{id}',
  tablePermission: 'readWrite',
};

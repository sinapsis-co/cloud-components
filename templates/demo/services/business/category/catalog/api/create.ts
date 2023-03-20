import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Category, CategoryCreate } from '../../entities/category';

export type Interface = ApiInterface<{
  response: Category;
  pathParams: EmptyObject;
  body: CategoryCreate;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-categories-create',
  method: 'POST',
  basePath: 'categories',
  path: '/',
  tablePermission: 'readWrite',
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    codeValue: { type: String, required: false },
    categoryId: { type: String, required: false },
  }),
};

import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Category, CategoryUpdate } from '../../entities/category';

export type Interface = ApiInterface<{
  response: Category;
  pathParams: { id: string };
  body: CategoryUpdate;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-categories-update',
  method: 'PUT',
  basePath: 'categories',
  path: '/{id}',
  tablePermission: 'write',
  isPublic: true,
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    codeValue: { type: String, required: false },
    categoryId: { type: String, required: false },
  }),
};

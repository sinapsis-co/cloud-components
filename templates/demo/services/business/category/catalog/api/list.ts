import {
    ApiConfig,
    ApiInterface,
    EmptyObject,
    PaginatedQueryParams,
    PaginatedResponse
} from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Category } from '../../entities/category';

export type Interface = ApiInterface<{
  response: PaginatedResponse<Category>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-categories-list',
  method: 'GET',
  basePath: 'categories',
  path: '/',
  tablePermission: 'read',
};

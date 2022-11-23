import { ApiConfig, ApiInterface, EmptyObject, PaginatedQueryParams } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { ProductStore } from '../../entities';

export type Interface = ApiInterface<{
  response: Record<string, unknown>;
  pathParams: EmptyObject;
  body: ProductStore;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-product',
  method: 'POST',
  basePath: 'products',
  path: '/',
  tablePermission: 'write',
  isPublic: true
};

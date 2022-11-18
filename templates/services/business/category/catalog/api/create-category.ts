import { ApiConfig, ApiInterface, EmptyObject, PaginatedQueryParams } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { PayoutCreate } from '../../entities';

export type Interface = ApiInterface<{
  response: Record<string, unknown>;
  pathParams: EmptyObject;
  body: PayoutCreate;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-category',
  method: 'POST',
  basePath: 'categories',
  path: '/',
  tablePermission: 'none',
};

import {
    ApiConfig,
    ApiInterface,
    EmptyObject,
    PaginatedQueryParams,
    PaginatedResponse
} from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';

export type Interface = ApiInterface<{
  response: PaginatedResponse<Record<string, unknown>>;
  pathParams: EmptyObject;
  body: Record<string, unknown>;
  claims: UserClaims;
  queryParams: PaginatedQueryParams & { order?: string };
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-stock-report-list',
  method: 'GET',
  basePath: 'stock-report',
  path: '/',
  tablePermission: 'read',
};

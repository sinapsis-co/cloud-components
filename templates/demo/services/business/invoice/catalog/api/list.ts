import {
  ApiConfig,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Invoice } from '../../entities/invoice';

export type Interface = ApiInterface<{
  response: PaginatedResponse<Invoice>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-invoice-list',
  method: 'GET',
  basePath: 'invoice',
  path: '/',
  tablePermission: 'read',
};

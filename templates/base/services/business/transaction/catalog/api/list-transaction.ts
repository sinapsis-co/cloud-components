import {
  ApiConfig,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/support/identity-backoffice/entities/user-cognito';
import { Transaction } from '../../entities';

export type Interface = ApiInterface<{
  response: PaginatedResponse<Transaction>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-list-transaction',
  method: 'GET',
  basePath: 'transaction',
  path: '/',
  tablePermission: 'read',
};

import {
  ApiConfig,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Transaction } from '../../entities';

export type Interface = ApiInterface<{
  response: PaginatedResponse<Transaction>;
  pathParams: { orderId: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-list-transaction-order',
  method: 'GET',
  basePath: 'transaction',
  path: '/{orderId}',
  tablePermission: 'read',
};

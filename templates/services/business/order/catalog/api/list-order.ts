import {
  ApiConfig,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/identity/entities/user-cognito';
import { Order } from '../../entities';

export type Interface = ApiInterface<{
  response: PaginatedResponse<Order>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams & {
    type: Order['orderType'];
    from?: string;
  };
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-list-order',
  method: 'GET',
  basePath: 'order',
  path: '/',
  tablePermission: 'read',
};

import {
  ApiConfig,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { InventoryAllocation } from '../../entities/inventory-allocation';

export type Interface = ApiInterface<{
  response: PaginatedResponse<InventoryAllocation>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams & { order?: string };
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-inv-alloc-list',
  method: 'GET',
  basePath: 'inventory-allocation',
  path: '/',
  tablePermission: 'read',
};

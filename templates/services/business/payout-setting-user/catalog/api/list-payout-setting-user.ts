import {
  ApiConfig,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { PayoutUser } from '../../entities';

export type Interface = ApiInterface<{
  response: PaginatedResponse<PayoutUser>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-list-setting',
  method: 'GET',
  basePath: 'setting-payout',
  path: '/',
  tablePermission: 'read',
};

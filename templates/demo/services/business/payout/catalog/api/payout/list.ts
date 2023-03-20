import {
    ApiConfig,
    ApiInterface,
    EmptyObject,
    PaginatedQueryParams,
    PaginatedResponse
} from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Payout } from '../../../entities/payout';

export type Interface = ApiInterface<{
  response: PaginatedResponse<Payout>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-list-payout',
  method: 'GET',
  basePath: 'payout',
  path: '/',
  tablePermission: 'read',
};

import {
  ApiConfig,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Subscription } from '../../entities/subscription';

export type Interface = ApiInterface<{
  response: PaginatedResponse<Subscription>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-list-subscription',
  method: 'GET',
  basePath: 'stripe-subscription',
  path: '/',
  tablePermission: 'read',
};

import {
    ApiConfig, ApiInterface,
    EmptyObject, PaginatedQueryParams, PaginatedResponse
} from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Other } from '../../entities/other';

export type Interface = ApiInterface<{
  response: PaginatedResponse<Other>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-other-list',
  method: 'GET',
  basePath: 'other',
  path: '/',
  tablePermission: 'read',
};

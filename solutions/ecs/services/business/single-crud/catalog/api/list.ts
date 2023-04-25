import {
  ApiConfig,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-sdk/catalog/api';
import { Single } from '../../entities/base';

export type Interface = ApiInterface<{
  response: PaginatedResponse<Single>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: EmptyObject;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-single-list',
  method: 'GET',
  basePath: 'single',
  path: '/',
  tablePermission: 'read',
};

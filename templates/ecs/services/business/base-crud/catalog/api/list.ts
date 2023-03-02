import {
  ApiConfig,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Base } from '../../entities/base';

export type Interface = ApiInterface<{
  response: PaginatedResponse<Base>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: EmptyObject;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-base-list',
  method: 'GET',
  basePath: 'base',
  path: '/',
  tablePermission: 'read',
};

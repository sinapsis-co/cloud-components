import { ApiConfig, ApiInterface, EmptyObject, PaginatedQueryParams } from '@sinapsis-co/cc-sdk/catalog/api';
import { SingleKey } from '../../model/single-key';

export type Interface = ApiInterface<{
  response: SingleKey['List'];
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

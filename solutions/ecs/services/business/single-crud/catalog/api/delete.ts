import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Single } from '../../entities/base';

export type Interface = ApiInterface<{
  response: Single;
  pathParams: { id: string };
  body: EmptyObject;
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-single-delete',
  method: 'DELETE',
  basePath: 'single',
  path: '/{id}',
  tablePermission: 'readWrite',
};

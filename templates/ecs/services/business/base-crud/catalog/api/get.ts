import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Base } from '../../entities/base';

export type Interface = ApiInterface<{
  response: Base;
  pathParams: { id: string };
  body: EmptyObject;
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-base-get',
  method: 'GET',
  basePath: 'base',
  path: '/{id}',
  tablePermission: 'read',
};

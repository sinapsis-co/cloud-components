import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';

export type Interface = ApiInterface<{
  response: { url: string };
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-wait-list',
  method: 'GET',
  basePath: 'wait-list',
  path: '/',
  tablePermission: 'read',
};

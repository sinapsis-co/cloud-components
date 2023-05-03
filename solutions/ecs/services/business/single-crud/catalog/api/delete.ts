import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { SingleKey } from '../../model/single-key';

export type Interface = ApiInterface<{
  response: SingleKey['Entity'];
  pathParams: SingleKey['Key'];
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

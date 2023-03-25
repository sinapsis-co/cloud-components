import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Base } from '../../entities/base';

export type Interface = ApiInterface<{
  response: Base;
  pathParams: { id: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-base-delete',
  method: 'DELETE',
  basePath: 'base',
  path: '/{id}',
  tablePermission: 'readWrite',
};

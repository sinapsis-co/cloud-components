import { ApiInterface, EmptyObject, ApiConfig } from '@sinapsis-co/cc-platform-v2/catalog/api';
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
  name: 'api-base-get',
  method: 'GET',
  basePath: 'base',
  path: '/{id}',
  tablePermission: 'read',
};

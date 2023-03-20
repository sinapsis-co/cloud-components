import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Other } from '../../entities/other';

export type Interface = ApiInterface<{
  response: Other;
  pathParams: { id: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-other-get',
  method: 'GET',
  basePath: 'other',
  path: '/{id}',
  tablePermission: 'read',
};

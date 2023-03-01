import { ApiInterface, EmptyObject, ApiConfig } from '@sinapsis-co/cc-platform-v2/catalog/api';
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
  name: 'api-other-delete',
  method: 'DELETE',
  basePath: 'other',
  path: '/{id}',
  tablePermission: 'readWrite',
};

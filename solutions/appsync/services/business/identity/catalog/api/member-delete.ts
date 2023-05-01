import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { UserClaims } from '../../entities/user-cognito';
import { User } from '../../model/user';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: User;
  pathParams: { id: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-member-delete',
  method: 'DELETE',
  basePath: 'identity',
  path: '/member/{id}',
  tablePermission: 'write',
  scope: authScope.owner,
  authorizationMdw: authMdw,
};

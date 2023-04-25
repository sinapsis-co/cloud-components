import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Invite } from '../../entities/invite';
import { UserClaims } from '../../entities/user-cognito';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: Invite;
  pathParams: { id: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-invite-resend',
  method: 'POST',
  basePath: 'identity',
  path: '/invite/{id}',
  tablePermission: 'read',
  scope: authScope.owner,
  authorizationMdw: authMdw,
};

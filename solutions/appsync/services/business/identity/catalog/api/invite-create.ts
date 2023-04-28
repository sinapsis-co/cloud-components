import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { Invite } from '../../entities/invite';
import { UserClaims } from '../../entities/user-cognito';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: Invite;
  pathParams: EmptyObject;
  body: { email: string };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-invite-create',
  method: 'POST',
  basePath: 'identity',
  path: '/invite',
  tablePermission: 'readWrite',
  scope: authScope.owner,
  authorizationMdw: authMdw,
  schema: Schemy.schema<Interface['body']>({
    email: { type: String, required: true },
  }),
};
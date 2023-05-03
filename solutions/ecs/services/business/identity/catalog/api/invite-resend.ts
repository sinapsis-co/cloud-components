import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { UserClaims } from '../../entities/user-cognito';
import { InviteModel } from '../../model/invite';
import { authMdw, authScope } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: InviteModel['Entity'];
  pathParams: Pick<InviteModel['Key'], 'id'>;
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

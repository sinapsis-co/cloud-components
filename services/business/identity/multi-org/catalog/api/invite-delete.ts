import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';

import { authScope } from '../../entities/role';
import { UserClaims } from '../../entities/user-cognito';
import { InviteModel } from '../../model/invite';
import { authMdw } from '../../platform/authorization';

export type Interface = ApiInterface<{
  response: InviteModel['Entity'];
  pathParams: Pick<InviteModel['Key'], 'inviteId'>;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-invite-delete',
  method: 'DELETE',
  basePath: 'identity',
  path: '/invite/{inviteId}',
  tablePermission: 'write',
  scope: authScope.owner,
  authorizationMdw: authMdw,
};

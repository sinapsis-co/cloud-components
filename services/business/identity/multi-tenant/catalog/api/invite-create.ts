import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';

import { UserClaims } from '../../entities/user-cognito';
import { InviteModel } from '../../model/invite';

export type Interface = ApiInterface<{
  response: InviteModel['Entity'];
  pathParams: EmptyObject;
  body: { email: string };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-invite-create',
  method: 'POST',
  basePath: 'identity',
  path: '/invite',
  tablePermission: 'readWrite',
  schema: Schemy.schema<Interface['body']>({
    email: { type: String, required: true },
  }),
};

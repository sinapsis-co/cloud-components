import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { authMdw, authScope } from 'services/business/identity/platform/authorization';
import { UserClaims } from '../../../identity/entities/user-cognito';
import { Base, BaseCreate } from '../../entities/base';

export type Interface = ApiInterface<{
  response: Base;
  pathParams: EmptyObject;
  body: BaseCreate;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-base-create',
  method: 'POST',
  basePath: 'base',
  path: '/',
  tablePermission: 'write',
  scope: authScope.premium,
  authorizationMdw: authMdw,
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: true },
    updatableAtt: { type: String, required: true },
    optionalAtt: { type: String, required: false },
  }),
};

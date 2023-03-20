import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Other, OtherCreate } from '../../entities/other';

export type Interface = ApiInterface<{
  response: Other;
  pathParams: EmptyObject;
  body: OtherCreate;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-other-create',
  method: 'POST',
  basePath: 'other',
  path: '/',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: true },
    updatableAtt: { type: String, required: true },
    optionalAtt: { type: String, required: false },
  }),
};

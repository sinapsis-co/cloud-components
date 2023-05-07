import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';

import { UserClaims } from '@sinapsis-co/cc-services/business/identity/multi-tenant/entities/user-cognito';

import { AssetType } from '../../lib/assets-type';

export type Interface = ApiInterface<{
  response: { url: string };
  pathParams: EmptyObject;
  body: { assetType: AssetType; key: string };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiDefinition<Interface> = {
  name: 'api-create-get-url',
  method: 'POST',
  basePath: 'assets',
  path: '/create-get-url',
  schema: Schemy.schema<Interface['body']>({
    assetType: { type: String, required: true },
    key: { type: String, required: true },
  }),
};

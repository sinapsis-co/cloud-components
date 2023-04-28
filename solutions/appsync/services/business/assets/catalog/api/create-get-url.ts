import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { AssetType } from 'services/business/assets/lib/assets-type';
import { UserClaims } from 'services/business/identity/entities/user-cognito';

export type Interface = ApiInterface<{
  response: { url: string };
  pathParams: EmptyObject;
  body: { assetType: AssetType; key: string };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-get-url',
  method: 'POST',
  basePath: 'assets',
  path: '/create-get-url',
  schema: Schemy.schema<Interface['body']>({
    assetType: { type: String, required: true },
    key: { type: String, required: true },
  }),
};

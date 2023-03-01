import { ApiInterface, EmptyObject, ApiConfig } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { PresignedPutUrl } from 'services/business/assets/entities/presigned-url';
import { AssetType } from 'services/business/assets/lib/assets-type';
import { UserClaims } from 'services/business/identity/entities/user-cognito';

export type Interface = ApiInterface<{
  response: PresignedPutUrl;
  pathParams: EmptyObject;
  body: { assetType: AssetType; mediaType: string; extension: string };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-put-url',
  method: 'POST',
  basePath: 'assets',
  path: '/create-put-url',
  schema: Schemy.schema<Interface['body']>({
    assetType: { type: String, required: true },
    mediaType: { type: String, required: true },
    extension: { type: String, required: true },
  }),
};

import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';

import { UserClaims } from '@sinapsis-co/cc-services/business/identity/multi-tenant/entities/user-cognito';

import { PresignedPutUrl } from '../../entities/presigned-url';
import { AssetType } from '../../lib/assets-type';

export type Interface = ApiInterface<{
  response: PresignedPutUrl;
  pathParams: EmptyObject;
  body: {
    assetType: AssetType;
    mediaType: string;
    extension: string;
    entity: string;
    metadata: Record<string, string>;
  };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiDefinition<Interface> = {
  name: 'api-create-put-url',
  method: 'POST',
  basePath: 'assets',
  path: '/create-put-url',
  schema: Schemy.schema<Interface['body']>({
    assetType: { type: String, required: true },
    mediaType: { type: String, required: true },
    extension: { type: String, required: true },
    entity: { type: String, required: false },
    metadata: { type: Object, required: false },
  }),
};

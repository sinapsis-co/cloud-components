import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { Single, SingleUpdate } from '../../entities/base';

export type Interface = ApiInterface<{
  response: Single;
  pathParams: { id: string };
  body: SingleUpdate;
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-single-update',
  method: 'PUT',
  basePath: 'single',
  path: '/{id}',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    updatableAtt: { type: String, required: true },
  }),
};

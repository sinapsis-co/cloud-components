import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { Base, BaseUpdate } from '../../entities/base';

export type Interface = ApiInterface<{
  response: Base;
  pathParams: { id: string };
  body: BaseUpdate;
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-base-update',
  method: 'PUT',
  basePath: 'base',
  path: '/{id}',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    updatableAtt: { type: String, required: true },
  }),
};

import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { Base, BaseCreate } from '../../entities/base';

export type Interface = ApiInterface<{
  response: Base;
  pathParams: EmptyObject;
  body: BaseCreate;
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-base-create',
  method: 'POST',
  basePath: 'base',
  path: '/',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: true },
    updatableAtt: { type: String, required: true },
    optionalAtt: { type: String, required: false },
  }),
};

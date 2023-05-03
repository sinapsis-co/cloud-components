import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { SingleKey } from '../../model/single-key';

export type Interface = ApiInterface<{
  response: SingleKey['Entity'];
  pathParams: EmptyObject;
  body: SingleKey['Create'];
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-single-create',
  method: 'POST',
  basePath: 'single',
  path: '/',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: true },
    updatableAtt: { type: String, required: true },
    optionalAtt: { type: String, required: false },
  }),
};

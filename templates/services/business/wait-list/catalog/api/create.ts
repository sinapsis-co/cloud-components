import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { WaitList } from '../../entities/wait-list-user';

export type Interface = ApiInterface<{
  response: WaitList;
  pathParams: EmptyObject;
  body: Pick<WaitList, 'email' | 'givenName'>;
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  isPublic: true,
  name: 'api-wait-list-create',
  method: 'POST',
  basePath: 'wait-list',
  path: '/',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    email: { type: String, required: true },
    givenName: { type: String },
  }),
};

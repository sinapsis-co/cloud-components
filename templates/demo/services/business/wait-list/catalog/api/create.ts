import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { WaitList } from '../../entities/wait-list-user';

export type Interface = ApiInterface<{
  response: WaitList;
  pathParams: EmptyObject;
  body: Pick<WaitList, 'email' | 'givenName'> & { googleReCaptcha: string };
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
    email: {
      type: String,
      required: true,
      custom: (value: string) => {
        return Boolean(
          String(value)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        );
      },
    },
    givenName: { type: String },
    googleReCaptcha: { type: String, required: true },
  }),
};

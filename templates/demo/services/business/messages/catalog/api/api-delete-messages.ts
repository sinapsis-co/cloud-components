import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';

export type Interface = ApiInterface<{
  response: EmptyObject;
  pathParams: EmptyObject;
  body: {
    userId: string;
  };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-delete-messages',
  method: 'DELETE',
  basePath: 'messages',
  path: '/',
  tablePermission: 'readWrite',
  schema: Schemy.schema<Interface['body']>({
    userId: {
      type: String,
      required: true,
    },
  }),
};

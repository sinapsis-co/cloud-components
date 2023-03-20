import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { ConversationsUser } from '../../entities';

export type Interface = ApiInterface<{
  response: ConversationsUser;
  pathParams: EmptyObject;
  body: {
    userId: string;
    message?: string;
  };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-messages',
  method: 'POST',
  basePath: 'messages',
  path: '/',
  tablePermission: 'readWrite',
  schema: Schemy.schema<Interface['body']>({
    userId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
  }),
};

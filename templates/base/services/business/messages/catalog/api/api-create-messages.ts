import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform-v2/lib/schemy';
import { ConversationsUser } from '../../entities';
import { UserClaims } from 'services/business/identity/entities/user-cognito';

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

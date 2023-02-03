import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';

export type Interface = ApiInterface<{
  response: { success: boolean };
  pathParams: { cardId: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-delete-card',
  method: 'DELETE',
  basePath: 'customer-gateway',
  path: '/card/{cardId}',
  tablePermission: 'read',
};

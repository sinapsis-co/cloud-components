import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';

export type Interface = ApiInterface<{
  response: { success: boolean };
  pathParams: { cardId: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-create-card',
  method: 'POST',
  basePath: 'customer-gateway',
  path: '/card/{cardId}',
  tablePermission: 'read',
};

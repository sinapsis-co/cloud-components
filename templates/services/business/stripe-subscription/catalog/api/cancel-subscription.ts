import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Subscription } from '../../entities/subscription';

export type Interface = ApiInterface<{
  response: Subscription;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: { tenantId: string };
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-cancel-subscription',
  method: 'DELETE',
  basePath: 'stripe-subscription',
  path: '/',
  tablePermission: 'readWrite',
};

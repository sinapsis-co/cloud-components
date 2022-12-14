import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Subscription } from '../../entities/subscription';

export type Interface = ApiInterface<{
  response: Subscription;
  pathParams: {
    subscriptionId: string;
  };
  body: EmptyObject;
  claims: { tenantId: string };
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-get-subscription',
  method: 'GET',
  basePath: 'stripe-subscription',
  path: '/{subscriptionId}',
  tablePermission: 'read',
};

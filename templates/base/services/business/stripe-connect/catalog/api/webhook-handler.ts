import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';

export type Interface = ApiInterface<{
  response: EmptyObject;
  pathParams: EmptyObject;
  body: string;
  claims: { tenantId: string };
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-webhook-handler',
  method: 'POST',
  basePath: 'connect',
  path: '/webhook',
  tablePermission: 'read',
  isPublic: true,
};

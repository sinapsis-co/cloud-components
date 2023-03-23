import { EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { ApiIntegrationConfig, ApiIntegrationInterface } from '@sinapsis-co/cc-platform/catalog/integrations';
import { UserProfile } from 'services/business/identity/entities/user-profile';

export type Interface = ApiIntegrationInterface<{
  errorResponse: { errorCode: string; message: string };
  response: UserProfile;
  pathParams: EmptyObject;
  body: EmptyObject;
  queryParams: EmptyObject;
  headers: { Authorization: string };
}>;

export const config: ApiIntegrationConfig<Interface> = {
  method: 'GET',
  url: 'https://api.dev.v3base.sinapsis.io/identity/member',
};

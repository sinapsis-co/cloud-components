import { EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { ApiIntegrationConfig, ApiIntegrationInterface } from '@sinapsis-co/cc-platform/catalog/integrations';

export type Interface = ApiIntegrationInterface<{
  errorResponse: { errorCode: string; message: string };
  response: EmptyObject;
  pathParams: { token: string };
  body: {
    channel: string;
    attachments: {
      pretext: string;
      fallback: string;
      color: string;
      fields: { title: string; value: string; short: boolean }[];
    }[];
  };
  queryParams: EmptyObject;
  headers: EmptyObject;
}>;

export const config: ApiIntegrationConfig<Interface> = {
  method: 'POST',
  url: 'https://hooks.slack.com/services/{token}',
};

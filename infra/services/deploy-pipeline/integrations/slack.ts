import { ApiConfig, ApiInterface, ApiInterfaceExtended, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';

export type Interface = ApiInterfaceExtended<{
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
  claims: EmptyObject;
  queryParams: EmptyObject;
  headers: EmptyObject;
}>;

export const config: ApiConfig<ApiInterface> = {
  name: 'slack-send-message',
  method: 'POST',
  baseUrl: 'https://hooks.slack.com',
  basePath: 'services',
  path: '{token}',
};

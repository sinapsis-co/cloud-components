import { EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { ApiIntegrationConfig, ApiIntegrationInterface } from '@sinapsis-co/cc-sdk/catalog/integrations';

export type Interface = ApiIntegrationInterface<{
  errorResponse: { errorCode: string; message: string };
  response: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  pathParams: EmptyObject;
  body: { email: string };
  queryParams: EmptyObject;
  headers: { Authorization: string };
}>;

export const config: ApiIntegrationConfig<Interface> = {
  method: 'POST',
  url: 'https://api.dev.v3base.sinapsis.io/identity/member',
  // url: 'https://jsonplaceholder.typicode.com/todos/1',
};

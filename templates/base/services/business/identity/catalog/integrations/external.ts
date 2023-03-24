import { EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { ApiIntegrationConfig, ApiIntegrationInterface } from '@sinapsis-co/cc-platform/catalog/integrations';

export type Interface = ApiIntegrationInterface<{
  errorResponse: { errorCode: string; message: string };
  response: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  pathParams: EmptyObject;
  body: EmptyObject;
  queryParams: EmptyObject;
  headers: { Authorization: string };
}>;

export const config: ApiIntegrationConfig<Interface> = {
  method: 'GET',
  // url: 'https://api.dev.v3base.sinapsis.io/identity/member',
  url: 'https://jsonplaceholder.typicode.com/todos/1',
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { APIGatewayProxyEventV2WithJWTAuthorizer, APIGatewayProxyResultV2 } from 'aws-lambda';
import { apiParser } from './api-parser';
import { DEFAULT_HEADERS } from './headers';
import { ApiInterface, ApiConfig, ApiInterfaceRequest } from '../../catalog/api';

type Handler<T extends ApiInterface> = (
  event: APIGatewayProxyEventV2WithJWTAuthorizer,
  request: ApiInterfaceRequest<T>
) => Promise<T['response']>;

export const apiHandler = <T extends ApiInterface>(
  handler: Handler<T>,
  apiOptions: ApiConfig<T>,
  customHeaders?: APIGatewayProxyEventV2WithJWTAuthorizer['headers'],
  statusCode = 200
): Handler<T> => {
  return async (event: APIGatewayProxyEventV2WithJWTAuthorizer): Promise<APIGatewayProxyResultV2> => {
    const headers = { ...DEFAULT_HEADERS, ...customHeaders };

    try {
      const request: ApiInterfaceRequest<T> = await apiParser<T>(event, apiOptions.schema);

      if (apiOptions.authorizationMdw) apiOptions.authorizationMdw(request, apiOptions.scope);

      const result = await handler(event, request);

      return {
        statusCode: statusCode,
        headers,
        body: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error(error);

      return {
        statusCode: error.statusCode || 500,
        headers,
        body: JSON.stringify({
          code: error.code || error.message,
          description: error.description,
        }),
      };
    }
  };
};

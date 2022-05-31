import { APIGatewayProxyEventV2WithJWTAuthorizer } from 'aws-lambda';
import { Schemy } from 'schemy-ts';
import { ApiInterfaceKeys, ApiInterfaceRequest } from '../../../catalog/api/api-interface';
import { bodyParser } from './body-parser';
import { paramsParser } from './params-parser';

export const apiParser = async <T extends ApiInterfaceKeys>(
  event: APIGatewayProxyEventV2WithJWTAuthorizer,
  schema?: Schemy
): Promise<ApiInterfaceRequest<T>> => {
  const body = await bodyParser<T['body']>(event.body, schema);
  const pathParams = paramsParser<T['pathParams']>(event.pathParameters);
  const queryParams = paramsParser<T['queryParams']>(event.queryStringParameters);
  const claims = paramsParser<T['claims']>(event.requestContext.authorizer?.jwt.claims);

  return {
    body,
    pathParams,
    queryParams,
    claims,
  };
};

import { APIGatewayRequestSimpleAuthorizerHandlerV2 } from 'aws-lambda/trigger/api-gateway-authorizer';

export const handler: APIGatewayRequestSimpleAuthorizerHandlerV2 = async (req) => {
  // eslint-disable-next-line no-console
  console.log(req);
  return { isAuthorized: true };
};

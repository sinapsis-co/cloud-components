import { APIGatewayRequestSimpleAuthorizerHandlerV2 } from 'aws-lambda/trigger/api-gateway-authorizer';

export const handler: APIGatewayRequestSimpleAuthorizerHandlerV2 = async () => {
  // eslint-disable-next-line no-console
  // Dummy bypass
  return { isAuthorized: true };
};

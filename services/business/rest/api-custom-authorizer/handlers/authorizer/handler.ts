import { APIGatewayRequestSimpleAuthorizerHandlerV2 } from 'aws-lambda/trigger/api-gateway-authorizer';

export const handler: APIGatewayRequestSimpleAuthorizerHandlerV2 = async () => {
  // Dummy bypass
  return { isAuthorized: true };
};

import { handler } from '../../../services/business/place/handlers/api-create-place/handler';
import { placeRepo } from '../../../services/business/place/repository/place';
import { req } from './mocks/api-gateway-proxy-result';
import { context } from './mocks/api-gateway-proxy-event-auth';
// import { ApiInterfaceRequest } from '@sinapsis-co/cc-platform-v2/catalog/api';
placeRepo.createItem = jest.fn();



describe('Place - Service', () => {
  test('CloudFormation created', async () => {
    // await handler(context, req);
  });
});

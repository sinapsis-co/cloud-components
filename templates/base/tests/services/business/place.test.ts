/* eslint-disable */
import { placeRepo } from '../../../services/business/place/repository/place';
// import { ApiInterfaceRequest } from '@sinapsis-co/cc-platform-v2/catalog/api';
placeRepo.createItem = jest.fn();

describe('Place - Service', () => {
  test('CloudFormation created', async () => {
    // await handler(context, req);
  });
});

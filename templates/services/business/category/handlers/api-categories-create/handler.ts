import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { categoryApi } from '../../catalog';
import { categoryRepo } from '../../repository/category-repository';

export const handler = apiHandler<categoryApi.create.Interface>(async (_, req) => {
  const tenantId = req.claims.tenantId || '1234';

  let categoryId = '';
  if (req.body.categoryId) {
    try {
      const categories = await categoryRepo.listItem(
        tenantId,
        { limit: 100 },
        {
          KeyConditionExpression: '#pk = :pk AND begins_with(#sk, :sk)',
          ExpressionAttributeNames: {
            '#pk': 'pk',
            '#sk': 'sk',
          },
          ExpressionAttributeValues: {
            ':pk': tenantId,
            ':sk': categoryId,
          },
        }
      );

      if (categories.items) {
        categoryId = categories.items[0].id;
      }
      // eslint-disable-next-line no-empty
    } catch (error) {
      return await categoryRepo.createItem({ tenantId, id: uuid(), categoryId }, req.body);
    }
  }
  return await categoryRepo.createItem({ tenantId, id: uuid(), categoryId }, req.body);
}, categoryApi.create.config);

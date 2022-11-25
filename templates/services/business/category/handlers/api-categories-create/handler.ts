import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { categoryApi } from '../../catalog';
import { categoryRepo } from '../../repository/category-repository';

export const handler = apiHandler<categoryApi.create.Interface>(async (_, req) => {
  const tenantId = req.claims.tenantId;

  let categoryId = '';
  if (req.body.categoryId) {
    try {
      const categories = await categoryRepo.listItem(
        tenantId,
        { limit: 1 },
        {
          KeyConditionExpression: '#pk = :pk AND begins_with(#sk, :sk)',
          ExpressionAttributeNames: {
            '#pk': 'pk',
            '#sk': 'sk',
          },
          ExpressionAttributeValues: {
            ':pk': tenantId,
            ':sk': `${req.body.categoryId}#`,
          },
        }
      );

      if (categories.items) {
        categoryId = req.body.categoryId;
      }
    } catch (error) {
      throw new ApiError('CategoryId provided not found');
    }
  }
  return await categoryRepo.createItem({ tenantId, id: uuid(), categoryId }, req.body);
}, categoryApi.create.config);

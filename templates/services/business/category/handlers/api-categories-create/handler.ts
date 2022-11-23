import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { categoryApi } from '../../catalog';
import { categoryRepo } from '../../repository/category-repository';

export const handler = apiHandler<categoryApi.create.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  let categoryId = '';
  if (req.body.categoryId) {
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
  }
  return await categoryRepo.createItem({ tenantId, id: uuid(), categoryId }, req.body);
}, categoryApi.create.config);

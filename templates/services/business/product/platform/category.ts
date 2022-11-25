import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { Category } from 'services/business/category/entities/category';
import { categoryRepo } from 'services/business/category/repository/category-repository';

export const getCategory = async (id: string, tenant: string): Promise<Category> => {

    const category = await categoryRepo.listItem(tenant,
        { limit: 1 },
        {
            KeyConditionExpression: '#pk = :pk AND begins_with(#sk, :sk)',
            ExpressionAttributeNames: {
                '#pk': 'pk',
                '#sk': 'sk',
            },
            ExpressionAttributeValues: {
                ':pk': tenant,
                ':sk': `${id}#`,
            },
            TableName: process.env.CATEGORY_TABLE
        }
    );

    if (!category.items.length) throw new ApiError('CATEGORY_NOT_FOUND', 404);

    return category.items[0];
};
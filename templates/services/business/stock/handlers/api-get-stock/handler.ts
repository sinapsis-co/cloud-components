import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { stockApi } from '../../catalog';
import { stockRepo } from '../../repository/stock';

export const handler = apiHandler<stockApi.getStock.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    return await stockRepo.listItem(
        tenant,
        { limit: 100 },
        {
            KeyConditionExpression: '#pk = :pk AND begins_with(#sk, :sk)',
            ExpressionAttributeNames: {
                '#pk': 'pk',
                '#sk': 'sk',
            },
            ExpressionAttributeValues: {
                ':pk': tenant,
                ':sk': `${req.pathParams.id}#${req.queryParams.place || ''}`,
            },
        }
    );

}, stockApi.getStock.config);
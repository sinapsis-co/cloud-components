import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { categoryApi } from '../../catalog';

export const handler = apiHandler<categoryApi.createCategory.Interface>(async (_, req) => {
  return {
    message: 'category created',
  };
}, categoryApi.createCategory.config);

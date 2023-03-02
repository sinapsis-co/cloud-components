import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { Category } from 'services/business/category/entities/category';
import { categoryRepo } from 'services/business/category/repository/category-repository';

export const getCategory = async (id: string, tenant: string): Promise<Category> => {

    const category = await categoryRepo.checkItemExists({ tenantId: tenant, id }, { TableName: process.env.CATEGORY_TABLE });

    if (!category.exists) throw new ApiError('CATEGORY_NOT_FOUND', 404, `categoryId: ${id}`);

    return category.entity!;
};
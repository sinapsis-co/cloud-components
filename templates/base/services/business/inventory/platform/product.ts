import { Product } from 'services/business/product/entities';
import { productRepo } from 'services/business/product/repository/product';

export const getProduct = async (id: string, tenant: string): Promise<Product> => {
    return await productRepo.getItem({ id, tenantId: tenant }, { TableName: process.env.PRODUCT_TABLE });
};
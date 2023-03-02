import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Product, ProductBuilder, ProductCreate, ProductStore } from '../entities/product';

export const productRepo = repository<ProductBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'product',
  keySerialize: (key: ProductBuilder['key']): ProductBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.id
    };
  },
  entitySerialize: (key: ProductBuilder['key'], entityCreate: ProductCreate): ProductStore => {
    const mappedKey: ProductBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: key.id
    };
    const timers: ProductBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: ProductStore): Product => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      id: sk,
      tenantId: pk,
      ...att,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type ProductRepoEvent = RepositoryEvent<ProductBuilder>;

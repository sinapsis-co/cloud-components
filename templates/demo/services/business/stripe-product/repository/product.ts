import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { Product, ProductBuilder, ProductCreate, ProductStore } from '../entities/product';

export const productRepository = repository<ProductBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'product',

  keySerialize: (key: ProductBuilder['key']): ProductBuilder['storeMapping']['key'] => {
    return { pk: 'PRODUCT', sk: key.id };
  },

  entitySerialize: (key: ProductBuilder['key'], entityCreate: ProductCreate): ProductStore => {
    const mappedKey: ProductBuilder['storeMapping']['key'] = {
      pk: 'PRODUCT',
      sk: key.id,
    };
    const timers: ProductBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return {
      ...mappedKey,
      ...entityCreate,
      ...timers,
    } as ProductStore;
  },

  entityDeserialize: (entityStore: ProductStore): Product => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { pk, sk, features, createdAt, updatedAt, ...att } = entityStore;
    return {
      id: sk,
      ...att,
      features: features?.map((feat) => feat.split('\\n')).flat(),
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { Price, PriceBuilder, PriceCreate, PriceStore } from '../entities/price';

export const priceRepository = repository<PriceBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'price',

  keySerialize: (key: PriceBuilder['key']): PriceBuilder['storeMapping']['key'] => {
    return { pk: 'PRICE', sk: `${key.productId}#${key.id}` };
  },

  entitySerialize: (key: PriceBuilder['key'], entityCreate: PriceCreate): PriceStore => {
    const mappedKey: PriceBuilder['storeMapping']['key'] = {
      pk: 'PRICE',
      sk: `${key.productId}#${key.id}`,
    };
    const timers: PriceBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return {
      ...mappedKey,
      ...entityCreate,
      ...timers,
    } as PriceStore;
  },

  entityDeserialize: (entityStore: PriceStore): Price => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    const [productId, id] = sk.split('#');

    return {
      id,
      productId,
      ...att,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

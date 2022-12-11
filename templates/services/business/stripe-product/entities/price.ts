import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { AcceptedCurrencies, ProductWithFrequency } from 'services/support/stripe/entities';

export type PriceBuilder = EntityBuilder<{
  name: 'price';
  body: Omit<ProductWithFrequency, 'id' | 'quantity'> & { currency: AcceptedCurrencies };
  key: {
    id: string;
    productId: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
  };
  storeMapping: {
    key: {
      pk: 'PRICE';
      sk: string;
    };
    timers: {
      createdAt: string;
      updatedAt: string;
    };
  };
}>;

export type Price = Entity<PriceBuilder>;
export type PriceStore = EntityStore<PriceBuilder>;
export type PriceCreate = EntityCreate<PriceBuilder>;

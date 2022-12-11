import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

import { Price } from './price';
import { ExternalRef } from './product/external-ref';
import { ProductCategory } from './product/product-category';

export type ProductBuilder = EntityBuilder<{
  name: 'product';
  body: {
    category: ProductCategory;
    name: string;
    description?: string;
    features?: string[];
    extras?: string[];
    externalRefs?: ExternalRef[];
    prices?: Price[];
    active?: boolean;
  };
  key: {
    id: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
  };
  storeMapping: {
    key: {
      pk: 'PRODUCT';
      sk: string;
    };
    timers: {
      createdAt: string;
      updatedAt: string;
    };
  };
}>;

export type Product = Entity<ProductBuilder>;
export type ProductStore = EntityStore<ProductBuilder>;
export type ProductCreate = EntityCreate<ProductBuilder>;

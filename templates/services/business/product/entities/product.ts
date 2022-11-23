import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type ProductBuilder = EntityBuilder<{
  name: 'product';
  body: {
    name: string;
    category: string;
    description?: string;
    price?: number;
    image?: string;
    brand?: string;
    color?: string;
    material?: string;
    size?: string;
    width?: string;
    height?: string;
    weight?: string;
    countryOfOrigin?: string;
  };
  key: {
    tenantId: string;
    id: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
  };
  storeMapping: {
    key: {
      pk: string;
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

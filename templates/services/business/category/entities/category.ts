import {
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityStore,
  EntityUpdate,
} from '@sinapsis-co/cc-platform-v2/repository/interface';

export type CategoryBuilder = EntityBuilder<{
  name: 'categories';
  body: {
    name: string;
    description?: string;
    codeValue?: string;
    categoryId?: string;
  };
  key: {
    tenantId: string;
    id: string;
    categoryId: string;
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

export type Category = Entity<CategoryBuilder>;

export type CategoryStore = EntityStore<CategoryBuilder>;

export type CategoryCreate = EntityCreate<CategoryBuilder>;

export type CategoryUpdate = EntityUpdate<CategoryBuilder>;

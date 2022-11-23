import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type PlaceBuilder = EntityBuilder<{
  name: 'place';
  body: {
    name: string;
    branchCode?: string;
    description?: string;
    address?: string;
    latitude?: number;
    longitude?: number;
    telephone?: string;
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

export type Place = Entity<PlaceBuilder>;

export type PlaceStore = EntityStore<PlaceBuilder>;

export type PlaceCreate = EntityCreate<PlaceBuilder>;

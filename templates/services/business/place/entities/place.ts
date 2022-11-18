import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type PlaceBuilder = EntityBuilder<{
  name: 'place';
  body: {
    name: string;
    description: string;
    address: string;
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
      pk: string;
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

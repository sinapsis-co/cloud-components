import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform/repository/interface';

export type WaitListUserBuilder = EntityBuilder<{
  name: 'wait-list';
  body: {
    id: string;
    givenName?: string;
  };
  key: {
    email: string;
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

export type WaitList = Entity<WaitListUserBuilder>;

export type WaitListUserStore = EntityStore<WaitListUserBuilder>;

export type WaitListUserCreate = EntityCreate<WaitListUserBuilder>;

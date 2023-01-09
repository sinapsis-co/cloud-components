import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type PrelaunchUserBuilder = EntityBuilder<{
  name: 'prelaunch';
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

export type WaitList = Entity<PrelaunchUserBuilder>;

export type PrelaunchUserStore = EntityStore<PrelaunchUserBuilder>;

export type PrelaunchUserCreate = EntityCreate<PrelaunchUserBuilder>;

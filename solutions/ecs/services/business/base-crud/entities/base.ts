import {
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityStore,
  EntityUpdate,
} from '@sinapsis-co/cc-sdk/repository/interface';

export type BaseBuilder = EntityBuilder<{
  name: 'base';
  body: {
    name: string;
    updatableAtt: string;
    optionalAtt?: string;
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

export type Base = Entity<BaseBuilder>;

export type BaseStore = EntityStore<BaseBuilder>;

export type BaseCreate = EntityCreate<BaseBuilder>;

export type BaseUpdate = Pick<EntityUpdate<BaseBuilder>, 'updatableAtt'>;

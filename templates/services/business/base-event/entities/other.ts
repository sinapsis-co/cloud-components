import {
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityStore,
  EntityUpdate,
} from '@sinapsis-co/cc-platform-v2/repository/interface';

export type OtherBuilder = EntityBuilder<{
  name: 'other';
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

export type Other = Entity<OtherBuilder>;

export type OtherStore = EntityStore<OtherBuilder>;

export type OtherCreate = EntityCreate<OtherBuilder>;

export type OtherUpdate = Pick<EntityUpdate<OtherBuilder>, 'updatableAtt'>;

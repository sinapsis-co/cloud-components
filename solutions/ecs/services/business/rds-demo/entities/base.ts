import {
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityStore,
  EntityUpdate,
} from '@sinapsis-co/cc-sdk/integration/repository/interface';
import { BaseTableBuilder } from '../repository/base-table';

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
}>;

export type Base = Entity<BaseBuilder>;

export type BaseStore = EntityStore<BaseBuilder, BaseTableBuilder>;

export type BaseCreate = EntityCreate<BaseBuilder>;

export type BaseUpdate = Pick<EntityUpdate<BaseBuilder>, 'updatableAtt'>;

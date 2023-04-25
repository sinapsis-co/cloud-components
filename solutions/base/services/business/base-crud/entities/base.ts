import {
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityStore,
  EntityUpdate,
} from '@sinapsis-co/cc-sdk/integration/database/dynamo/interface';
import { BaseTableBuilder } from '../repository/table-base';

export type BaseEntity = EntityBuilder<{
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

export type Base = Entity<BaseEntity>;

export type BaseStore = EntityStore<BaseEntity, BaseTableBuilder>;

export type BaseCreate = EntityCreate<BaseEntity>;

export type BaseUpdate = Pick<EntityUpdate<BaseEntity>, 'updatableAtt'>;

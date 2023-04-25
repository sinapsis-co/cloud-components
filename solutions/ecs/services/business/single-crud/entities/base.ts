import {
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityStore,
  EntityUpdate,
} from '@sinapsis-co/cc-sdk/integration/database/dynamo/interface';
import { SingleTable } from '../repository/table-single';

export type SingleEntity = EntityBuilder<{
  name: 'single';
  body: {
    name: string;
    updatableAtt: string;
    optionalAtt?: string;
  };
  key: {
    id: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
  };
}>;

export type Single = Entity<SingleEntity>;

export type SingleStore = EntityStore<SingleEntity, SingleTable>;

export type SingleCreate = EntityCreate<SingleEntity>;

export type SingleUpdate = Pick<EntityUpdate<SingleEntity>, 'updatableAtt'>;

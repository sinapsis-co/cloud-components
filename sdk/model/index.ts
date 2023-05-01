import { TableBuilder } from '../integration/database/dynamo/types/table-builder';

export type EntityBuilderKeys = {
  name: string;
  body: Record<string, unknown>;
  key: Record<string, unknown>;
  timers: Record<string, Date>;
};

export type EntityBuilder<Builder extends EntityBuilderKeys = EntityBuilderKeys> = {
  name: Builder['name'];
  key: Builder['key'];
  body: Builder['body'];
  timers: Builder['timers'];
};

export type Entity<EBuilderKeys extends EntityBuilderKeys> = EBuilderKeys['body'] &
  EBuilderKeys['key'] &
  EBuilderKeys['timers'];

export type EntityKey<EBuilderKeys extends EntityBuilderKeys> = EBuilderKeys['key'];

export type EntityCreate<
  EBuilderKeys extends EntityBuilderKeys,
  Omitted extends keyof EBuilderKeys['body'] | undefined = undefined
> = Omitted extends keyof EBuilderKeys['body'] ? Omit<EBuilderKeys['body'], Omitted> : EBuilderKeys['body'];

export type EntityUpdate<
  EBuilderKeys extends EntityBuilderKeys,
  Omitted extends keyof EBuilderKeys['body'] | undefined = undefined
> = Omitted extends keyof EBuilderKeys['body'] ? Omit<EBuilderKeys['body'], Omitted> : EBuilderKeys['body'];

export type EntityStore<EBuilderKeys extends EntityBuilderKeys, TBuilder extends TableBuilder> = EBuilderKeys['body'] &
  TBuilder['storeMapping']['key'] &
  TBuilder['storeMapping']['timers'];

export type EntityEvents<EBuilderKeys extends EntityBuilderKeys> = {
  created: {
    name: `app.${EBuilderKeys['name']}.created`;
    payload: Entity<EBuilderKeys>;
  };
  updated: {
    name: `app.${EBuilderKeys['name']}.updated`;
    payload: Entity<EBuilderKeys>;
  };
  deleted: {
    name: `app.${EBuilderKeys['name']}.deleted`;
    payload: Entity<EBuilderKeys>;
  };
  recovered: {
    name: `app.${EBuilderKeys['name']}.recovered`;
    payload: Entity<EBuilderKeys>;
  };
};

export type Model<
  EBuilderKeys extends EntityBuilderKeys,
  TBuilder extends TableBuilder | undefined = undefined,
  CreateOmitted extends keyof EBuilderKeys['body'] | undefined = undefined,
  UpdateOmitted extends keyof EBuilderKeys['body'] | undefined = undefined
> = {
  Builder: EntityBuilder<EBuilderKeys>;
  Entity: Entity<EBuilderKeys>;
  Create: EntityCreate<EBuilderKeys, CreateOmitted>;
  Update: EntityUpdate<EBuilderKeys, UpdateOmitted>;
  Key: EntityKey<EBuilderKeys>;
  Events: EntityEvents<EBuilderKeys>;
  Store: TBuilder extends TableBuilder ? EntityStore<EBuilderKeys, TBuilder> : undefined;
  StoreMapping: TBuilder extends TableBuilder ? TBuilder['storeMapping'] : undefined;
  StoreBuilder: TBuilder extends TableBuilder ? TBuilder : undefined;
};

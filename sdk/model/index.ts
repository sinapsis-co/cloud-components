import { TableStoreBuilder } from '../integration/store/dynamo/types/table-store-builder';

export type EntityBuilderParams = {
  name: string;
  body: Record<string, unknown>;
  key: Record<string, unknown>;
};

export type EntityBuilder<EBuilderKeys extends EntityBuilderParams = EntityBuilderParams> = {
  name: EBuilderKeys['name'];
  key: EBuilderKeys['key'];
  body: EBuilderKeys['body'];
};

export type EntityKey<EBuilderKeys extends EntityBuilderParams> = EBuilderKeys['key'];

export type EntityBody<EBuilderKeys extends EntityBuilderParams> = EBuilderKeys['body'];

export type Entity<EBuilderKeys extends EntityBuilderParams> = EBuilderKeys['body'] & EBuilderKeys['key'];

type EntityCreate<EBuilderKeys extends EntityBuilderParams, Omitted extends (keyof EBuilderKeys['body'])[] = []> = Omit<
  EBuilderKeys['body'],
  Omitted[number] | 'createdAt' | 'updatedAt'
>;

type EntityUpdate<
  EBuilderKeys extends EntityBuilderParams,
  Omitted extends (keyof EBuilderKeys['body'])[] = []
> = Partial<Omit<EBuilderKeys['body'], Omitted[number] | 'createdAt' | 'updatedAt'>>;

export type EntityList<EBuilderKeys extends EntityBuilderParams> = {
  items: Entity<EBuilderKeys>[];
  nextToken: string | number | null;
};

export type EntityStore<
  EBuilderKeys extends EntityBuilderParams,
  TBuilder extends TableStoreBuilder
> = EBuilderKeys['body'] & TBuilder['keyMapping'];

export type EntityEvents<EBuilderKeys extends EntityBuilderParams> = {
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

export type ModelOptions<T extends EntityBuilderParams> = {
  storeBuilder: TableStoreBuilder | undefined;
  omittedCreateKeys?: (keyof T['body'])[];
  omittedUpdateKeys?: (keyof T['body'])[];
};

export type Model<
  EBuilder extends EntityBuilder = EntityBuilder,
  options extends ModelOptions<EBuilder> | undefined = undefined
> = {
  Builder: EntityBuilder<EBuilder>;
  Entity: Entity<EBuilder>;
  Key: EntityKey<EBuilder>;
  Body: EntityBody<EBuilder>;
  List: EntityList<EBuilder>;
  Create: options extends ModelOptions<EBuilder>
    ? EntityCreate<
        EBuilder,
        options['omittedCreateKeys'] extends (keyof EBuilder['body'])[] ? options['omittedCreateKeys'] : []
      >
    : EntityCreate<EBuilder>;
  Update: options extends ModelOptions<EBuilder>
    ? EntityUpdate<
        EBuilder,
        options['omittedUpdateKeys'] extends (keyof EBuilder['body'])[] ? options['omittedUpdateKeys'] : []
      >
    : EntityUpdate<EBuilder>;
  Events: EntityEvents<EBuilder>;
  Store: options extends ModelOptions<EBuilder>
    ? options['storeBuilder'] extends TableStoreBuilder
      ? EntityStore<EBuilder, options['storeBuilder']>
      : undefined
    : undefined;
  StoreBuilder: options extends ModelOptions<EBuilder>
    ? options['storeBuilder'] extends TableStoreBuilder
      ? options['storeBuilder']
      : undefined
    : undefined;
};

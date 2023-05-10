export type EntityBuilderParams = {
  type: string;
  body: Record<string, unknown>;
  key: Record<string, unknown>;
};

export type EntityBuilder<EBuilderKeys extends EntityBuilderParams = EntityBuilderParams> = {
  type: EBuilderKeys['type'];
  key: EBuilderKeys['key'];
  body: EBuilderKeys['body'];
};

export type EntityKey<EBuilderKeys extends EntityBuilderParams> = EBuilderKeys['key'];

export type EntityBody<EBuilderKeys extends EntityBuilderParams> = EBuilderKeys['body'];

export type EntityBase<EBuilderKeys extends EntityBuilderParams> = {
  type: EBuilderKeys['type'];
  createdAt: string;
  updatedAt: string;
};

export type Entity<EBuilderKeys extends EntityBuilderParams> = EBuilderKeys['body'] &
  EBuilderKeys['key'] &
  EntityBase<EBuilderKeys>;

type EntityCreate<EBuilderKeys extends EntityBuilderParams, Omitted extends (keyof EBuilderKeys['body'])[] = []> = Omit<
  EBuilderKeys['body'],
  Omitted[number]
>;

type EntityUpdate<
  EBuilderKeys extends EntityBuilderParams,
  Omitted extends (keyof EBuilderKeys['body'])[] = []
> = Partial<Omit<EBuilderKeys['body'], Omitted[number]>>;

export type EntityList<EBuilderKeys extends EntityBuilderParams> = {
  items: Entity<EBuilderKeys>[];
  nextToken: string | number | null;
};

export type EntityEvents<EBuilderKeys extends EntityBuilderParams> = {
  created: {
    name: `app.${EBuilderKeys['type']}.created`;
    payload: Entity<EBuilderKeys>;
  };
  updated: {
    name: `app.${EBuilderKeys['type']}.updated`;
    payload: Entity<EBuilderKeys>;
  };
  deleted: {
    name: `app.${EBuilderKeys['type']}.deleted`;
    payload: Entity<EBuilderKeys>;
  };
  recovered: {
    name: `app.${EBuilderKeys['type']}.recovered`;
    payload: Entity<EBuilderKeys>;
  };
};

export type ModelOptions<T extends EntityBuilderParams> = {
  omittedCreateKeys?: (keyof T['body'])[];
  omittedUpdateKeys?: (keyof T['body'])[];
};

export type Model<
  EBuilder extends EntityBuilder = EntityBuilder,
  options extends ModelOptions<EBuilder> | undefined = undefined
> = {
  Builder: EntityBuilder<EBuilder>;
  Entity: Entity<EBuilder>;
  Type: EBuilder['type'];
  Base: EntityBase<EBuilder>;
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
};

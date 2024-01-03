type CollapseMapUnion<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

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

export type EntityType<EBuilderKeys extends EntityBuilderParams> = EBuilderKeys['type'];

export type EntityBase<EBuilderKeys extends EntityBuilderParams> = {
  type: EBuilderKeys['type'];
  createdAt: string;
  updatedAt: string;
};

export type Entity<EBuilderKeys extends EntityBuilderParams> = CollapseMapUnion<
  EBuilderKeys['body'] & EBuilderKeys['key'] & EntityBase<EBuilderKeys>
>;

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
  Options extends ModelOptions<EBuilder> | undefined = undefined
> = {
  Builder: EntityBuilder<EBuilder>;
  Entity: Entity<EBuilder>;
  Type: EntityType<EBuilder>;
  Base: EntityBase<EBuilder>;
  Key: EntityKey<EBuilder>;
  Body: EntityBody<EBuilder>;
  List: EntityList<EBuilder>;
  Events: EntityEvents<EBuilder>;
  Create: Options extends ModelOptions<EBuilder>
    ? EntityCreate<
        EBuilder,
        Options['omittedCreateKeys'] extends (keyof EBuilder['body'])[] ? Options['omittedCreateKeys'] : []
      >
    : EntityCreate<EBuilder>;
  Update: Options extends ModelOptions<EBuilder>
    ? EntityUpdate<
        EBuilder,
        Options['omittedUpdateKeys'] extends (keyof EBuilder['body'])[] ? Options['omittedUpdateKeys'] : []
      >
    : EntityUpdate<EBuilder>;
};

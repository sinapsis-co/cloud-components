import { TableBuilder } from './table-builder';

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

export type Entity<EBuilder extends EntityBuilderKeys> = EBuilder['body'] & EBuilder['key'] & EBuilder['timers'];

export type EntityCreate<EBuilder extends EntityBuilderKeys, Omitted extends keyof EBuilder['body'] = ''> = Omit<
  EBuilder['body'],
  Omitted
> &
  Partial<Pick<EBuilder, 'timers'>>;

export type EntityUpdate<EBuilder extends EntityBuilderKeys> = EBuilder['body'];

export type EntityStore<EBuilder extends EntityBuilderKeys, TBuilder extends TableBuilder> = EBuilder['body'] &
  TBuilder['storeMapping']['key'] &
  TBuilder['storeMapping']['timers'];

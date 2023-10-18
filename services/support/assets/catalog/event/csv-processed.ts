import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';

export type Event<T extends string> = EventInterface<{
  name: `app.${T}.uploaded`;
  payload: Record<string, any>;
}>;

export const eventConfig = <T extends string>(name: T): EventConfig<Event<T>> => ({
  name: `app.${name}.uploaded`,
  source: 'app',
});

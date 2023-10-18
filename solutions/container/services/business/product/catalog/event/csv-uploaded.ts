import { EventConfig } from '@sinapsis-co/cc-sdk/catalog/event';

import { Event as EventProduct } from '@sinapsis-co/cc-services/support/assets/catalog/event/csv-processed';

export type Event = EventProduct<'product'>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.product.uploaded',
  source: 'app',
};

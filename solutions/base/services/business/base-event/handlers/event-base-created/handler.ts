import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';
import { baseEvent } from '../../../base-crud/catalog';

export const handler = eventHandler<baseEvent.created.Event>(async (event) => {
  event;
});

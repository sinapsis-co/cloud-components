import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { baseEvent } from '../../../base-crud/catalog';

export const handler = eventHandler<baseEvent.created.Event>(async (event) => {
  event;
});

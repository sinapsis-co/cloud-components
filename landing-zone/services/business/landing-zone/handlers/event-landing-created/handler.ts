import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';
import { landingEvent } from '../../catalog';

export const handler = eventHandler<landingEvent.created.Event>(async (event) => {
  const { landing, credentials } = event.detail;

  //....
});

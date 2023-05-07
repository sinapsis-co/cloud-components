import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';
import { identityEvent } from '@sinapsis-co/cc-services/business/identity/multi-tenant/catalog';

export const handler = eventHandler<identityEvent.tenantCreated.Event>(async (event) => {
  event;
});

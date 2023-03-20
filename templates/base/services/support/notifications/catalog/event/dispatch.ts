import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { NotificationMessage, NotificationTemplate } from '@sinapsis-co/cc-platform/catalog/notifications';

export type Event<Template extends NotificationTemplate> = EventInterface<{
  name: 'app.notification.dispatch';
  payload: { via: 'email' | 'sms' } & NotificationMessage<Template>;
}>;

export const eventConfig: EventConfig<Event<any>> = {
  name: 'app.notification.dispatch',
  source: 'notification',
};

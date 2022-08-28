import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { NotificationMessage, NotificationTemplate } from '@sinapsis-co/cc-platform-v2/catalog/notifications';

export type Event<Template extends NotificationTemplate> = EventInterface<{
  name: 'app.notification.dispatch';
  payload: { via: 'email' | 'sms' } & NotificationMessage<Template>;
}>;

export const eventConfig: EventConfig<Event<any>> = {
  name: 'app.notification.dispatch',
  source: 'notification',
};

import { NotificationMessage } from '@sinapsis-co/cc-platform-v2/catalog/notifications';
import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { sendMessages } from '@sinapsis-co/cc-platform-v2/integrations/queue/send-messages';
import { notificationEvent } from '../../catalog';

export const handler = eventHandler<notificationEvent.dispatch.Event<any>>(async (event) => {
  const { via, ...msm } = event.detail;
  if (via === 'email') {
    await sendMessages<NotificationMessage>([msm], process.env.EMAIL_QUEUE_URL!);
  } else if (via === 'sms') {
    await sendMessages<NotificationMessage>([msm], process.env.SMS_QUEUE_URL!);
  }
});

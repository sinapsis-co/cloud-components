import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { messagesSecret } from '../../catalog';
import { message } from '../../platform/twilio';
import { UserProfileRepoEvent } from 'services/business/identity/repository/user-profile-repository';


export const handler = eventHandler<UserProfileRepoEvent['updated']>(async (event) => {
  const twilioSecret = await getSecret<messagesSecret.twilio.Secret>(messagesSecret.twilio.secretConfig);
  const { updateUser } = message({ secret: twilioSecret });

  await updateUser({
    ...event.detail,
    avatar: event.detail.avatar ? `${process.env.MEDIA_URL}/${event.detail.avatar}` : undefined,
  });
});

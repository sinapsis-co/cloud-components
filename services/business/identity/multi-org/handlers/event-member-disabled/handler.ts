import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';

import { disableCognitoUser } from '@sinapsis-co/cc-sdk/integration/cognito';
import { identityEvent } from '../../catalog';

export const handler = eventHandler<identityEvent.memberDisabled.Event>(async (event) => {
  const { email } = event.detail;

  await disableCognitoUser(email);
});

import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';

import { identityEvent } from '../../catalog';

export const handler = eventHandler<identityEvent.guestSignUp.Event>(async (event) => {
  const { userInput, orgId, workspaceId } = event.detail;

  // await disableCognitoUser(email);
});

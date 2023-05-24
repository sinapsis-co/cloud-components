import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';

import { dispatchEventBatch } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { identityEvent } from '../../catalog';
import { Invite } from '../../model/invite';
import { User } from '../../model/user';
import { repoInvite } from '../../repository/repo-invite';
import { repoUser } from '../../repository/repo-user';

export const handler = eventHandler<identityEvent.tenantDeleted.Event>(async (event) => {
  const { tenantId } = event.detail;
  const [users, invites] = await Promise.all([listUsers(tenantId), listInvites(tenantId)]);

  await Promise.all([
    dispatchEventBatch(identityEvent.memberDisabled.eventConfig, users),
    dispatchEventBatch(identityEvent.inviteDeleted.eventConfig, invites),
  ]);
});

const listUsers = async (tenantId: string, nextToken?) => {
  const allItems: User[] = [];
  const { items, nextToken: nextTokenResponse } = await repoUser.listItem(tenantId, { limit: 1000, nextToken });
  allItems.push(...items);
  if (nextTokenResponse) {
    allItems.push(...(await listUsers(tenantId, nextTokenResponse)));
  }
  return allItems;
};

const listInvites = async (tenantId: string, nextToken?) => {
  const allItems: Invite[] = [];
  const { items, nextToken: nextTokenResponse } = await repoInvite.listItem(tenantId, { limit: 1000, nextToken });
  allItems.push(...items);
  if (nextTokenResponse) {
    allItems.push(...(await listInvites(tenantId, nextTokenResponse)));
  }
  return allItems;
};

import { Invite } from '../model/invite';
import { User } from '../model/user';
import { repoInvite } from '../repository/repo-invite';
import { repoUser } from '../repository/repo-user';

export const listAllUsers = async (tenantId: string, nextToken?) => {
  const allItems: User[] = [];
  const { items, nextToken: nextTokenResponse } = await repoUser.listItem({ tenantId }, { nextToken });
  allItems.push(...items);
  if (nextTokenResponse) {
    allItems.push(...(await listAllUsers(tenantId, nextTokenResponse)));
  }
  return allItems;
};

export const listAllInvites = async (tenantId: string, nextToken?) => {
  const allItems: Invite[] = [];
  const { items, nextToken: nextTokenResponse } = await repoInvite.listItem({ tenantId }, { nextToken });
  allItems.push(...items);
  if (nextTokenResponse) {
    allItems.push(...(await listAllInvites(tenantId, nextTokenResponse)));
  }
  return allItems;
};

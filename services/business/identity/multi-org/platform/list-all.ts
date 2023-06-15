import { OrgUser } from '../model/org-user';
import { OrgWorkspace } from '../model/org-workspace';
import { repoOrgUser } from '../repository/repo-org-user';
import { repoOrgWorkspace } from '../repository/repo-org-workspace';

export const listAllOrgWorkspace = async (orgId: string, nextToken?): Promise<OrgWorkspace[]> => {
  const allItems: OrgWorkspace[] = [];
  const { items, nextToken: nextTokenResponse } = await repoOrgWorkspace.listItem({ orgId }, { nextToken });
  allItems.push(...items);
  if (nextTokenResponse) {
    allItems.push(...(await listAllOrgWorkspace(orgId, nextTokenResponse)));
  }
  return allItems;
};

export const listAllOrgUser = async (orgId: string, nextToken?): Promise<OrgUser[]> => {
  const allItems: OrgUser[] = [];
  const { items, nextToken: nextTokenResponse } = await repoOrgUser.listItem({ orgId }, { nextToken });
  allItems.push(...items);
  if (nextTokenResponse) {
    allItems.push(...(await listAllOrgUser(orgId, nextTokenResponse)));
  }
  return allItems;
};

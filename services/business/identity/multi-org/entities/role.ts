export type Role = 'owner' | 'member' | 'guest';

export const authScope: Record<Role, string> = {
  owner: '2',
  member: '1',
  guest: '0',
};

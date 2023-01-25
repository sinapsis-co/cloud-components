import { WaitList } from './wait-list-user';

export type WaitListUserRow = Omit<WaitList, 'id'>;
export type WaitListUsersReport = WaitListUserRow[];

export const prelaunchListHeaders: string[] = ['Email', 'Name', 'Registration Date'];

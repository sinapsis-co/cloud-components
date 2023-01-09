import { WaitList } from './prelaunch-user';

export type PrelaunchUserRow = Omit<WaitList, 'id'>;
export type PrelaunchUsersReport = PrelaunchUserRow[];

export const prelaunchListHeaders: string[] = ['Email', 'Name', 'Registration Date'];

import { randomUUID, randomInt } from 'crypto';

export const uuid = () => randomUUID();

export const randomDigitCode = (length: number) => {
  const chars = '0123456789';
  return [...Array(length)].map(() => chars[randomInt(9)]).join('');
};

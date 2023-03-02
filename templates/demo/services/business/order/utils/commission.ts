import { COMMISSION, COMMISSION_AMOUNT } from '../lib/config';

export const commissionSellerPlatform = (orderSubTotal: number): number =>
  Number(((COMMISSION * orderSubTotal) / 100).toFixed(2));

export const platformFee = COMMISSION_AMOUNT;

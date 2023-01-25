import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import StripeClient from 'stripe';

export const getCoupon =
  (stripe: StripeClient) =>
  async (coupon: string): Promise<StripeClient.Coupon> => {
    return await stripe.coupons.retrieve(coupon).catch((e) => {
      throw new ApiError('STRIPE.INVALID_COUPON', 400, e.raw.message);
    });
  };

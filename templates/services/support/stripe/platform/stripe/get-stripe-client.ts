import stripe from 'stripe';

export const getStripe = (secret: string): stripe => {
  return new stripe(secret, {
    apiVersion: '2022-08-01',
    maxNetworkRetries: 3,
    typescript: true,
  });
};

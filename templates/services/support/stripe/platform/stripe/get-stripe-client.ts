import stripe from 'stripe';

export const getStripe = (secret: string): stripe => {
  return new stripe(secret, {
    apiVersion: '2022-11-15',
    maxNetworkRetries: 3,
    typescript: true,
  });
};

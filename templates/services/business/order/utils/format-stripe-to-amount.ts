export const formatStripeToAmount = (amount: number): number => {
  return Number((amount / 100).toFixed(2));
};

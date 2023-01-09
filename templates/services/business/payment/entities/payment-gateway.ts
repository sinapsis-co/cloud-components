export type GatewayAvailable = 'STRIPE';
type TypeGateway<K = GatewayAvailable, V = void> = { type: K } & V;

export type GatewayStripe = {
  stripeId: string;
  id: string;
};

export type Gateway = TypeGateway<'STRIPE', GatewayStripe>;

export type Provider = 'stripe';

export interface ExternalRef {
  provider: Provider;
  id: string;
}

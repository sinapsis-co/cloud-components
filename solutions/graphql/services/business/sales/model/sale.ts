import { Model } from '@sinapsis-co/cc-sdk/model';

export type SaleModel = Model<{
  type: 'Sale';
  key: {
    venueId: string;
    saleId: string;
  };
  body: {
    date: string;
    total: number;
  };
}>;

export type Sale = SaleModel['Entity'];
export type SaleCreate = SaleModel['Create'];
export type SaleList = SaleModel['List'];

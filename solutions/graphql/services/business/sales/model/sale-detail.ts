import { Model } from '@sinapsis-co/cc-sdk/model';

export type SaleDetailModel = Model<{
  type: 'SaleDetail';
  key: {
    venueId: string;
    saleId: string;
    productId: string;
  };
  body: {
    quantity: number;
    subtotal: number;
  };
}>;

export type SaleDetail = SaleDetailModel['Entity'];
export type SaleDetailCreate = SaleDetailModel['Create'];
export type SaleDetailList = SaleDetailModel['List'];

import { Model } from '@sinapsis-co/cc-sdk/model';

export type ProductModel = Model<{
  type: 'Product';
  key: {
    venueId: string;
    productId: string;
  };
  body: {
    name: string;
    category: string;
    description?: string;
    price?: number;
  };
}>;

export type Product = ProductModel['Entity'];
export type ProductCreate = ProductModel['Create'];
export type ProductList = ProductModel['List'];

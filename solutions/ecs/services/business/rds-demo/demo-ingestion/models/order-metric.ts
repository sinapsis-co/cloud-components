import { DataTypes, Model, Sequelize } from 'sequelize';

export class OrderMetric extends Model {}

export const builder = (sequelize: Sequelize) => {
  OrderMetric.init(
    {
      tenantId: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      sku: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      marketplaceId: DataTypes.STRING,
      productAsin: DataTypes.STRING,
      primaryVariant: DataTypes.STRING,
      secondaryVariant: DataTypes.STRING,
      variantAsin: DataTypes.STRING,
      point: DataTypes.STRING,
      unitCount: DataTypes.INTEGER,
      orderCount: DataTypes.INTEGER,
      totalSales: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      currency: DataTypes.STRING,
    },
    { sequelize }
  );
};

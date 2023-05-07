import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('RawMetrics')
export class RawMetric {
  @PrimaryColumn()
  tenantId: string;

  @PrimaryColumn()
  sku: string;

  @Column()
  marketplaceId: string;

  @Column()
  productAsin: string;

  @Column({ nullable: true })
  primaryVariant?: string;

  @Column({ nullable: true })
  secondaryVariant?: string;

  @Column({ nullable: true })
  variantAsin?: string;

  @Column({ nullable: true })
  unitCount?: number;

  @Column({ nullable: true })
  orderCount?: number;

  @Column({ nullable: true })
  totalSales?: number;

  @Column({ nullable: true })
  price?: number;

  @Column({ nullable: true })
  currency?: string;
}

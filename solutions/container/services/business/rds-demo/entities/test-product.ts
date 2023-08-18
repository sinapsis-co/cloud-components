import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base-entity';

@Entity('Products')
export class Products extends BaseEntity {
  @PrimaryColumn()
  tenantId: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}

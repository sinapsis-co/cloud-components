import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntity } from '../../rds-demo/entities/base-entity';

@Entity('Categories')
export class Category extends BaseEntity {
  @PrimaryColumn()
  tenantId: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}

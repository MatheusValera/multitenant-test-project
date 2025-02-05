import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('tenants')
export class Tenant {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ length: 255 })
    name: string

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date
}

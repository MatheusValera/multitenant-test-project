import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Tenant } from './Tenant'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    tenant_id: string

  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenant_id' })
    tenant: Tenant

  @Column({ length: 255 })
    name: string

  @Column({ unique: true })
    email: string

  @Column()
    passwordHash: string

  @Column({ type: 'varchar', length: 50 })
    role: string // Exemplo: 'admin' ou 'user'

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date
}

import { type Tenant } from '../entities/Tenant'

export interface ITenantRepository {
  create: (tenant: Tenant) => Promise<Tenant>
  findById: (id: string) => Promise<Tenant | null>
  // Adicione outros métodos conforme necessário
}

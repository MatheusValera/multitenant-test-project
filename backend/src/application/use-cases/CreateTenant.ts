import { Tenant } from '../../domain/entities/Tenant'
import { type ITenantRepository } from '../../domain/repositories/ITenantRepository'

export class CreateTenant {
  constructor (private readonly tenantRepository: ITenantRepository) {}

  async execute (name: string): Promise<Tenant> {
    const tenant = new Tenant()
    tenant.name = name

    return await this.tenantRepository.create(tenant)
  }
}

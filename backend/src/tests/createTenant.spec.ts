import { type Tenant } from '../../src/domain/entities/Tenant'
import { CreateTenant } from '../application/use-cases/CreateTenant'
import { type ITenantRepository } from '../domain/repositories/ITenantRepository'

class MockTenantRepository implements ITenantRepository {
  private readonly tenants: Tenant[] = []

  async create (tenant: Tenant): Promise<Tenant> {
    this.tenants.push(tenant)
    return tenant
  }

  async findById (id: string): Promise<Tenant | null> {
    return this.tenants.find(tenant => tenant.id === id) || null
  }

  // Implemente outros métodos conforme necessário
}

describe('CreateTenant Use Case', () => {
  it('deve criar um tenant com sucesso', async () => {
    const tenantRepository = new MockTenantRepository()
    const createTenant = new CreateTenant(tenantRepository)

    const tenant = await createTenant.execute('Empresa Teste')
    expect(tenant).toBeDefined()
    expect(tenant.name).toBe('Empresa Teste')
  })
})

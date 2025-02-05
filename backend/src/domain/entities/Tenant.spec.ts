import { type DataSource } from 'typeorm'
import { Tenant } from './Tenant'
import { createTestDataSource } from '../../config/testDataSource'

describe('Tenant Entity - In Memory DB', () => {
  let testDataSource: DataSource

  beforeAll(async () => {
    testDataSource = await createTestDataSource()
  })

  afterAll(async () => {
    if (testDataSource) {
      await testDataSource.destroy()
    }
  })

  it('should create and retrieve a tenant', async () => {
    const tenantRepository = testDataSource.getRepository(Tenant)

    const tenant = tenantRepository.create({
      name: 'Empresa Teste'
    })
    await tenantRepository.save(tenant)

    const savedTenant = await tenantRepository.findOneBy({ id: tenant.id })
    expect(savedTenant).toBeDefined()
    expect(savedTenant?.name).toBe('Empresa Teste')
  })
})

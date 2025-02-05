import { User } from './User'
import { Tenant } from './Tenant'
import { type DataSource } from 'typeorm'
import { createTestDataSource } from '../../config/testDataSource'

describe('User Entity - In Memory DB', () => {
  let testDataSource: DataSource
  let tenant: Tenant

  beforeAll(async () => {
    testDataSource = await createTestDataSource()

    const tenantRepository = testDataSource.getRepository(Tenant)
    tenant = tenantRepository.create({ name: 'Empresa Teste' })
    await tenantRepository.save(tenant)
  })

  afterAll(async () => {
    if (testDataSource) {
      await testDataSource.destroy()
    }
  })

  it('should create and retrieve a user', async () => {
    const userRepository = testDataSource.getRepository(User)

    const user = userRepository.create({
      tenant_id: tenant.id,
      name: 'Usuário Teste',
      email: 'usuario@teste.com',
      passwordHash: 'hashedpassword',
      role: 'admin'
    })
    await userRepository.save(user)

    const savedUser = await userRepository.findOne({
      where: { id: user.id },
      relations: ['tenant']
    })

    expect(savedUser).toBeDefined()
    expect(savedUser?.name).toBe('Usuário Teste')
    expect(savedUser?.email).toBe('usuario@teste.com')
    expect(savedUser?.tenant).toBeDefined()
    expect(savedUser?.tenant.name).toBe('Empresa Teste')
  })
})

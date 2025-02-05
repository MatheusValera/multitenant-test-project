import { type Repository } from 'typeorm'
import { Tenant } from '../../domain/entities/Tenant'
import { AppDataSource } from '../../config/ormconfig'
import { type ITenantRepository } from '../../domain/repositories/ITenantRepository'

export class TenantRepository implements ITenantRepository {
  private readonly repository: Repository<Tenant>

  constructor () {
    this.repository = AppDataSource.getRepository(Tenant)
  }

  async create (tenant: Tenant): Promise<Tenant> {
    return await this.repository.save(tenant)
  }

  async findById (id: string): Promise<Tenant | null> {
    return await this.repository.findOneBy({ id })
  }

  // Implemente outros métodos conforme necessário
}

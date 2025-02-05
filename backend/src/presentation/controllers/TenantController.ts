import { type Request, type Response } from 'express'
import { CreateTenant } from '../../application/use-cases/CreateTenant'
import { TenantRepository } from '../../infrastructure/repositories/TenantRepository'

export class TenantController {
  static async create (req: Request, res: Response): Promise<any> {
    const { name } = req.body
    const tenantRepository = new TenantRepository()
    const createTenant = new CreateTenant(tenantRepository)

    try {
      const tenant = await createTenant.execute(name as string)
      return res.status(201).json(tenant)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

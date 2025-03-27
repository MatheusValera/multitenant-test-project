import { PrismaClient } from '@prisma/client'
import { ICompany } from '../../domain/data/model/ICompany'
import { ICompanyRepository } from '../../domain/data/repositories/ICompanyRepository'

export class CompanyRepository implements ICompanyRepository {
  private readonly prisma: PrismaClient

  constructor (prisma: PrismaClient) {
    this.prisma = prisma
  }

  async create (company: ICompany): Promise<ICompany> {
    return this.prisma.company.create({ data: company })
  }

  async findById (id: string): Promise<ICompany | null> {
    return this.prisma.company.findUnique({ where: { id } })
  }

  async findByEmail (email: string): Promise<ICompany | null> {
    return this.prisma.company.findUnique({ where: { email } })
  }

  async update (id: string, company: Partial<ICompany>): Promise<ICompany> {
    return this.prisma.company.update({ where: { id }, data: company })
  }

  async delete (id: string): Promise<void> {
    await this.prisma.company.delete({ where: { id } })
  }
}

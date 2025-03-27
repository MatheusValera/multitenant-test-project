import { PrismaClient } from '@prisma/client'
import { ICompany } from '../../../domain/data/model/ICompany'
import { ICompanyRepository } from '../../../domain/data/repository/ICompanyRepository'

export class CompanyRepository implements ICompanyRepository {
  private readonly prisma: PrismaClient

  constructor (prisma: PrismaClient) {
    this.prisma = prisma
  }

  async update (id: string, data: Partial<Omit<ICompany, 'createdAt' | 'updatedAt'>>): Promise<ICompany> {
    return this.prisma.company.update({ where: { id }, data })
  }

  async create (data: Omit<ICompany, 'createdAt' | 'updatedAt' | 'id'>): Promise<ICompany> {
    return this.prisma.company.create({ data })
  }

  async findById (id: string): Promise<ICompany | null> {
    return this.prisma.company.findUnique({ where: { id } })
  }

  async findByEmail (email: string): Promise<ICompany | null> {
    return this.prisma.company.findUnique({ where: { email } })
  }

  async delete (id: string): Promise<void> {
    await this.prisma.company.delete({ where: { id } })
  }
}

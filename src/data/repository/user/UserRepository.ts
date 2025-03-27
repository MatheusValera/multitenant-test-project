import { PrismaClient } from '@prisma/client'
import { IUser } from '../../../domain/data/model/IUser'
import { IUserRepository } from '../../../domain/data/repository/IUserRepository'

export class UserRepository implements IUserRepository {
  private readonly prisma: PrismaClient

  constructor (prisma: PrismaClient) {
    this.prisma = prisma
  }

  async create (user: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>): Promise<IUser> {
    return this.prisma.user.create({ data: user })
  }

  async findById (id: string): Promise<IUser | null> {
    return this.prisma.user.findUnique({ where: { id } })
  }

  async findByEmail (email: string): Promise<IUser | null> {
    return this.prisma.user.findUnique({ where: { email } })
  }

  async update (id: string, user: Partial<Omit<IUser, 'createdAt' | 'updatedAt'>>): Promise<IUser> {
    return this.prisma.user.update({ where: { id }, data: user })
  }

  async delete (id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } })
  }
}

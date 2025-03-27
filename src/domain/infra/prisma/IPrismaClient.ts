import { PrismaClient } from '@prisma/client'

export interface IPrismaClient {
  _prismaClient: PrismaClient
  getClient: () => PrismaClient
}

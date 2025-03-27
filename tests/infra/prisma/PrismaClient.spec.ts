import prismaClient from '../../../src/infra/prisma/PrismaClient'
import { prismaMock } from './PrismaClientMock'

describe('prismaClient', () => {
  it('should return a PrismaClient instance', () => {
    const client = prismaMock
    expect(client).not.toBeNull()
  })

  it('should return a PrismaClient instance', () => {
    const client = prismaClient
    expect(client).not.toBeNull()
  })
})

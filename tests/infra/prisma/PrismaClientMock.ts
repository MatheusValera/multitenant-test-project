import { PrismaClient } from '@prisma/client'
import { mockDeep, DeepMockProxy } from 'jest-mock-extended'

import prismaClient from '../../../src/infra/prisma/PrismaClient'

jest.mock('../../../src/infra/prisma/PrismaClient', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>()
}))

export const prismaMock = prismaClient as unknown as DeepMockProxy<PrismaClient>

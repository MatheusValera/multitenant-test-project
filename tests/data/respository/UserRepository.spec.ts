import { prismaMock } from '../../infra/prisma/PrismaClientMock'
import { EJobFunction, IUser } from '../../../src/domain/data/model/IUser'
import { UserRepository } from '../../../src/data/repository/UserRepository'

describe('UserRepository', () => {
  const userRepository = new UserRepository(prismaMock)

  const mockUser: IUser = {
    id: '1',
    companyId: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    jobFunction: EJobFunction.ADMIN,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  it('should create a user', async () => {
    prismaMock.user.create.mockResolvedValue(mockUser)
    const user = await userRepository.create(mockUser)
    expect(user).toEqual(mockUser)
  })

  it('should find a user by id', async () => {
    prismaMock.user.findUnique.mockResolvedValue(mockUser)
    const user = await userRepository.findById('1')
    expect(user).toEqual(mockUser)
  })

  it('should update a user', async () => {
    const updatedUser = { ...mockUser, name: 'Jane Doe' }
    prismaMock.user.update.mockResolvedValue(updatedUser)
    const user = await userRepository.update('1', { name: 'Jane Doe' })
    expect(user).toEqual(updatedUser)
  })

  it('should delete a user', async () => {
    prismaMock.user.delete.mockResolvedValue(mockUser)
    await expect(userRepository.delete('1')).resolves.not.toThrow()
  })
})

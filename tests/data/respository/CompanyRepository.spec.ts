import { prismaMock } from '../../infra/prisma/PrismaClientMock'
import { ICompany } from '../../../src/domain/data/model/ICompany'
import { CompanyRepository } from '../../../src/data/repository/CompanyRepository'

describe('CompanyRepository', () => {
  const companyRepository = new CompanyRepository(prismaMock)

  const mockCompany: ICompany = {
    id: '1',
    name: 'Tech Corp',
    email: 'contact@techcorp.com',
    cnpj: '12345678901234',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  it('should create a company', async () => {
    prismaMock.company.create.mockResolvedValue(mockCompany)
    const company = await companyRepository.create(mockCompany)
    expect(company).toEqual(mockCompany)
  })

  it('should find a company by id', async () => {
    prismaMock.company.findUnique.mockResolvedValue(mockCompany)
    const company = await companyRepository.findById('1')
    expect(company).toEqual(mockCompany)
  })

  it('should update a company', async () => {
    const updatedCompany = { ...mockCompany, name: 'New Tech Corp' }
    prismaMock.company.update.mockResolvedValue(updatedCompany)
    const company = await companyRepository.update('1', { name: 'New Tech Corp' })
    expect(company).toEqual(updatedCompany)
  })

  it('should delete a company', async () => {
    prismaMock.company.delete.mockResolvedValue(mockCompany)
    await expect(companyRepository.delete('1')).resolves.not.toThrow()
  })
})

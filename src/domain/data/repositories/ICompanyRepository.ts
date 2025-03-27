import { ICompany } from '../model/ICompany'

export interface ICompanyRepository {
  create: (company: ICompany) => Promise<ICompany>
  findById: (id: string) => Promise<ICompany | null>
  findByEmail: (email: string) => Promise<ICompany | null>
  update: (id: string, company: Partial<ICompany>) => Promise<ICompany>
  delete: (id: string) => Promise<void>
}

import { ICompany } from '../model/ICompany'
import { ICreateRepository, IDeleteRepository, IFindByIdRepository, IUpdateRepository } from './GenericRepository'

export interface ICompanyRepository
  extends ICreateRepository<ICompany>,
  IUpdateRepository<ICompany>,
  IDeleteRepository<ICompany>,
  IFindByIdRepository<ICompany> {
  findByEmail: (email: string) => Promise<ICompany | null>
}

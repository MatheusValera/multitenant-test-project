import { IUser } from '../model/IUser'
import { ICreateRepository, IDeleteRepository, IFindByIdRepository, IUpdateRepository } from './GenericRepository'

export interface IUserRepository
  extends ICreateRepository<IUser>,
  IUpdateRepository<IUser>,
  IDeleteRepository<IUser>,
  IFindByIdRepository<IUser> {
  findByEmail: (email: string) => Promise<IUser | null>
}

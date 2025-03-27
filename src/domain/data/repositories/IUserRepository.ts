import { IUser } from '../model/IUser'

export interface IUserRepository {
  create: (user: IUser) => Promise<IUser>
  findById: (id: string) => Promise<IUser | null>
  findByEmail: (email: string) => Promise<IUser | null>
  update: (id: string, user: Partial<IUser>) => Promise<IUser>
  delete: (id: string) => Promise<void>
}

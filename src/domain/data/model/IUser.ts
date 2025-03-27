export enum EJobFunction {
  ADMIN = 'admin',
}

export interface IUser {
  id: string
  companyId: string
  name: string
  email: string
  password: string
  jobFunction: string | EJobFunction
  createdAt: Date
  updatedAt: Date
}

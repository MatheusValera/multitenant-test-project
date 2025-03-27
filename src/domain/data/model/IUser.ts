export enum EJobFunction {
  ADMIN = 'admin',
}

export interface IUser {
  id: string
  companyId: string
  name: string
  email: string
  password: string
  jobFunction: EJobFunction
  createdAt: Date
  updatedAt: Date
}

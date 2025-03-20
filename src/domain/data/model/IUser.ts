export enum EJobFunction {
  ADMIN = 'admin',
}

export interface IUser {
  Id: string
  CompanyId: string
  Name: string
  Email: string
  Password: string
  JobFunction: EJobFunction
  CreatedAt: Date
  UpdatedAt: Date
}

export interface ICreateRepository<T> {
  create: (data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>) => Promise<T>
}

export interface IUpdateRepository<T> {
  update: (id: string, data: Partial<Omit<T, 'createdAt' | 'updatedAt'>>) => Promise<T>
}

export interface IFindByIdRepository<T> {
  findById: (id: string) => Promise<T | null>
}

export interface IDeleteRepository<T> {
  delete: (id: string) => Promise<void>
}

import dotenv from 'dotenv'
import { DataSource } from 'typeorm'
import { User } from '../domain/entities/User'
import { Tenant } from '../domain/entities/Tenant'

dotenv.config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: process.env.NODE_ENV === 'dev', // Apenas para desenvolvimento; desative em produção
  logging: false,
  entities: [Tenant, User]
})

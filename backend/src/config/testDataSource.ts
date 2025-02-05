import { newDb } from 'pg-mem'
import { type DataSource } from 'typeorm'
import { Tenant } from '../domain/entities/Tenant'
import { User } from '../domain/entities/User'
import { v4 as uuidv4 } from 'uuid'

export async function createTestDataSource (): Promise<DataSource> {
  const db = newDb({
    autoCreateForeignKeyIndices: true
  })

  db.public.registerFunction({
    name: 'version',
    implementation: () => 'PostgreSQL 12.0'
  })

  db.public.registerFunction({
    name: 'current_database',
    implementation: () => 'test'
  })

  db.public.registerFunction({
    name: 'uuid_generate_v4',
    implementation: () => uuidv4()
  })

  const dataSource = db.adapters.createTypeormDataSource({
    type: 'postgres',
    synchronize: true,
    entities: [Tenant, User]
  })

  await dataSource.initialize()
  return dataSource
}

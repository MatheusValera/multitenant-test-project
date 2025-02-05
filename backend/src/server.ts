import 'reflect-metadata'
import dotenv from 'dotenv'
import { AppDataSource } from './config/ormconfig'
import express, { type Request, type Response } from 'express'
import tenantRoutes from './presentation/routes/tenantRoutes'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, ARQSYS Multi-Tenant API!')
})

// Uso das rotas de Tenant
app.use('/api', tenantRoutes)

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })

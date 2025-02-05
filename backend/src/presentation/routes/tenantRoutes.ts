import { Router } from 'express'
import { TenantController } from '../controllers/TenantController'

const router = Router()

// eslint-disable-next-line @typescript-eslint/unbound-method
router.post('/tenants', TenantController.create)

export default router

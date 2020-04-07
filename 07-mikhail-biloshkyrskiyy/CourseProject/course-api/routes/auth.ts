import { Router } from 'express'

import {
    login,
    reloadingToken
} from '@/controllers/auth'

const router = Router()

router.post('/login', login)
router.get('/reloading-token', reloadingToken)

export default router
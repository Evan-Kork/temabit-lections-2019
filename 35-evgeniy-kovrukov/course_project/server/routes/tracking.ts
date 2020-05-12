import { Router } from 'express'

import {
    getTracking,
    getHistoryTracking
} from '@/controllers/tracking'

const router = Router()

router.get('/history/:number', getHistoryTracking)
router.get('/:number', getTracking)

export default router
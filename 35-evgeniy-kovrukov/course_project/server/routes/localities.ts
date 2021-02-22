import { Router } from 'express'

import {
    getLocalities,
    getAllLocalities,
    getLocalitiesActivity
} from '@/controllers/localities'

const router = Router()

router.get('/', getLocalities)
router.get('/all', getAllLocalities)
router.get('/activity', getLocalitiesActivity)

export default router
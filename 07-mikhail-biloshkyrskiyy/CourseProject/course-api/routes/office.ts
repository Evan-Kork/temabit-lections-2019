import { Router } from 'express'

import {
    getAllOffice,
    getOffice,
    getOfficeLocality,
    getOfficeLocator,
    getOfficeTypes
} from '@/controllers/office'

const router = Router()

router.get('/', getAllOffice)
router.post('/locality', getOfficeLocality)
router.post('/locator', getOfficeLocator)
router.get('/types', getOfficeTypes)
router.get('/:id', getOffice)

export default router
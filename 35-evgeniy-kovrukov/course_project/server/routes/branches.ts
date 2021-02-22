import { Router } from 'express'

import {
    getAllBranches,
    getBranches,
    getBranchesLocality,
    getBranchesLocator,
    getBranchesTypes
} from '@/controllers/branches'

const router = Router()

router.get('/', getAllBranches)
router.post('/locality', getBranchesLocality)
router.post('/locator', getBranchesLocator)
router.get('/types', getBranchesTypes)
router.get('/:id', getBranches)

export default router
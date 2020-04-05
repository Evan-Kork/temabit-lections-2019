import iMenu from '@/interfaces/iMenu'
import { iTracking, iDeclaration } from '@/interfaces/iTracking'
import { iBranch, iLocation, iLocalities, iFormat } from '@/interfaces/iBranch'
import { iApiResult } from '@/interfaces/iAuth'

export default interface iRootState {
    Menu: iMenu[]
    Tracking: {
        tracking: iTracking[]
        declaration: iDeclaration
        trackingHistory: iTracking[]
    }
    Branch: {
        branch: iBranch[]
        branchTypes: iFormat[]
        location: iLocation
        localities: iLocalities[]
        localitiesSelect: iLocalities[]
    }
    Auth: {
        user: {
            result: iApiResult
        }
    }
}
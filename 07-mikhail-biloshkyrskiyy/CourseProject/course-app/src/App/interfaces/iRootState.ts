import iMenu from '@/interfaces/iMenu'
import { iTracking, iDeclaration } from '@/interfaces/iTracking'
import { iOffice, iLocation, iLocalities, iFormat } from '@/interfaces/iOffice'
import { iApiResult, iUser, iToken } from '@/interfaces/iAuth'

export default interface iRootState {
    Menu: iMenu[]
    Tracking: {
        tracking: iTracking[]
        declaration: iDeclaration
        trackingHistory: iTracking[]
    }
    Office: {
        office: iOffice[]
        officeTypes: iFormat[]
        location: iLocation
        localities: iLocalities[]
        localitiesSelect: iLocalities[]
    }
    Auth: {
        user: iUser
        result: iApiResult
        token: iToken
    }
}
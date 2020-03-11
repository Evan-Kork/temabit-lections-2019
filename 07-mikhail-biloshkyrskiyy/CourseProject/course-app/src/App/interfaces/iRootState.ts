import iMenu from '@/interfaces/iMenu'
import { iTracking, iDeclaration } from '@/interfaces/iTracking'
import { iBranch, iLocation, iLocalities, iFormat} from '@/interfaces/iBranch'

export default interface iRootState {
    Menu: iMenu[]
    Tracking: iTracking[]
    TrackingHistory: iTracking[]
    Declaration: iDeclaration
    Branch: iBranch[]
    BranchTypes: iFormat[]
    Location: iLocation
    Localities: iLocalities[]
    LocalitiesSelect: iLocalities[]
}
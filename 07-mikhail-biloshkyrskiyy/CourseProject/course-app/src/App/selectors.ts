import iRootState from '@/interfaces/iRootState'
import { iTracking, iDeclaration } from '@/interfaces/iTracking'
import { iOffice, iLocation, iLocalities, iFormat } from '@/interfaces/iOffice'
import { iApiResult, iUser, iToken } from '@/interfaces/iAuth'

export const getDeclaration = (state: iRootState): iDeclaration => state.Tracking.declaration
export const getTracking = (state: iRootState): iTracking[] => state.Tracking.tracking
export const getTrackingHistory = (state: iRootState): iTracking[] => state.Tracking.trackingHistory

export const getLocation = (state: iRootState):iLocation => state.Office.location
export const getOffice = (state: iRootState):iOffice[] => state.Office.office
export const getOfficeTypes = (state: iRootState):iFormat[] => state.Office.officeTypes

export const getLocalities = (state: iRootState):iLocalities[] => state.Office.localities
export const getLocalitiesSelect = (state: iRootState):iLocalities[] => state.Office.localitiesSelect

export const getApiResult = (state: iRootState): iApiResult => state.Auth.result
export const getUser = (state: iRootState): iUser => state.Auth.user
export const getToken = (state: iRootState): iToken => state.Auth.token
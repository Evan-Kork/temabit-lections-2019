import iRootState from '@/interfaces/iRootState'
import { iTracking, iDeclaration } from '@/interfaces/iTracking'
import { iBranch, iLocation, iLocalities, iFormat } from '@/interfaces/iBranch'

export const getDeclaration = (state: iRootState): iDeclaration => state.Tracking.declaration
export const getTracking = (state: iRootState): iTracking[] => state.Tracking.tracking
export const getTrackingHistory = (state: iRootState): iTracking[] => state.Tracking.trackingHistory

export const getLocation = (state: iRootState):iLocation => state.Branch.location
export const getBranches = (state: iRootState):iBranch[] => state.Branch.branch
export const getBranchTypes = (state: iRootState):iFormat[] => state.Branch.branchTypes

export const getLocalities = (state: iRootState):iLocalities[] => state.Branch.localities
export const getLocalitiesSelect = (state: iRootState):iLocalities[] => state.Branch.localitiesSelect
import iRootState from '@/interfaces/iRootState'
import { iTracking, iDeclaration } from '@/interfaces/iTracking'
import { iBranch, iLocation, iLocalities, iFormat } from '@/interfaces/iBranch'

export const getDeclaration = (state: iRootState): iDeclaration => state.Declaration
export const getTracking = (state: iRootState): iTracking[] => state.Tracking
export const getTrackingHistory = (state: iRootState): iTracking[] => state.TrackingHistory

export const getLocation = (state: iRootState):iLocation => state.Location
export const getBranches = (state: iRootState):iBranch[] => state.Branch
export const getBranchTypes = (state: iRootState):iFormat[] => state.BranchTypes

export const getLocalities = (state: iRootState):iLocalities[] => state.Localities
export const getLocalitiesSelect = (state: iRootState):iLocalities[] => state.LocalitiesSelect
import { iMultipleCached } from '~interface/iMultipleCached'

export const ACTION_MULTIPLE_CACHED_START   = 'ACTION_MULTIPLE_CACHED_START'
export const ACTION_MULTIPLE_CACHED_SUCCESS = 'ACTION_MULTIPLE_CACHED_SUCCESS'
export const ACTION_MULTIPLE_CACHED_FAILURE = 'ACTION_MULTIPLE_CACHED_FAILURE'

export interface iMultipleCachedAction {
    type: typeof ACTION_MULTIPLE_CACHED_SUCCESS
    payload: iMultipleCached
}
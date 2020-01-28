import * as R from 'ramda'

import { 
  FETCH_METHOD_ARRAY_SUCCESS 
} from 'actionTypes'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_METHOD_ARRAY_SUCCESS:
      return R.merge(state, payload)
    default:
      return state
  }
}
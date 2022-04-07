import * as R from 'ramda'

export const getMethodArray = (state) => R.values(state.MethodArray)
export const getActiveArticleId = (ownProps) => R.path(['match', 'params', 'id'], ownProps)
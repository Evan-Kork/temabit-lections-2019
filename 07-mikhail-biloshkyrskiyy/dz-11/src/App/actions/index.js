import {
    FETCH_METHOD_ARRAY_START,
    FETCH_METHOD_ARRAY_SUCCESS,
    FETCH_METHOD_ARRAY_FAILURE,

    FETCH_METHOD_ARRAY_BY_ID_START,
    FETCH_METHOD_ARRAY_BY_ID_SUCCESS,
    FETCH_METHOD_ARRAY_BY_ID_FAILURE
} from 'actionTypes'
import {
    fetchMethodArray as fetchMethodArrayApi,
} from 'api'

export const fetchMethodArray = () => async dispatch => {
    dispatch({ type: FETCH_METHOD_ARRAY_START })

    try {
        const arrays = await fetchMethodArrayApi()
        dispatch({
            type: FETCH_METHOD_ARRAY_SUCCESS,
            payload: arrays
        })
    } catch (err) {
        dispatch({
            type: FETCH_METHOD_ARRAY_FAILURE,
            payload: err,
            error: true
        })
    }
}
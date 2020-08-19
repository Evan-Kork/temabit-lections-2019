import {
    ACTION_OFFICE_SUCCESS,
    iOfficeAction,

    ACTION_INIT_OFFICE_SUCCESS,
    iInitOfficeAction,

    ACTION_LOCALITIES_SUCCESS,
    iLocalitiesAction,

    ACTION_INIT_LOCALITIES_SUCCESS,
    iInitLocalitiesAction,

    ACTION_LOCALITIES_SELECT_SUCCESS,
    iLocalitiesSelectAction,

    ACTION_LOCATION_SUCCESS,
    iLocationAction,

    ACTION_OFFICE_TYPES_SUCCESS,
    iOfficeTypesAction,

    ACTION_INIT_OFFICE_TYPES_SUCCESS,
    iInitOfficeTypesAction
} from '@/actionTypes/typeOffice'

const initialState = {
    office: {},
    officeTypes: {},
    location: {},
    localities: {},
    localitiesSelect: {}
}

type Action = iOfficeAction & iInitOfficeAction & iLocalitiesAction & iInitLocalitiesAction &
    iLocalitiesSelectAction & iLocationAction & iOfficeTypesAction & iInitOfficeTypesAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_OFFICE_SUCCESS:
            return {
                ...state,
                office: action.payload
            }
        case ACTION_INIT_OFFICE_SUCCESS:
            return {
                ...state,
                office: action.payload
            }
        case ACTION_OFFICE_TYPES_SUCCESS:
            return {
                ...state,
                officeTypes: action.payload
            }
        case ACTION_INIT_OFFICE_TYPES_SUCCESS:
            return {
                ...state,
                officeTypes: action.payload
            }
        case ACTION_LOCATION_SUCCESS:
            return {
                ...state,
                location: action.payload
            }
        case ACTION_LOCALITIES_SUCCESS:
            return {
                ...state,
                localities: action.payload
            }
        case ACTION_INIT_LOCALITIES_SUCCESS:
            return {
                ...state,
                localities: action.payload
            }
        case ACTION_LOCALITIES_SELECT_SUCCESS:
            return {
                ...state,
                localitiesSelect: action.payload
            }
        default:
            return state
    }
}
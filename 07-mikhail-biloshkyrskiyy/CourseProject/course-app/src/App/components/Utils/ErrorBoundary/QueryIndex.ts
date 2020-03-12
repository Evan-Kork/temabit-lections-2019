import gql from 'graphql-tag'

export interface iErrorInvertory {
    error: string
    errorInfo: string
    date: string
}

export const ADD_ERROR_INVERTORY = gql`
    mutation($error: String!, $errorInfo: String!, $date: String!){
        addError(error: $error, errorInfo: $errorInfo, date: $date) {
            id
            error
            errorInfo
            date
        }
    }
`
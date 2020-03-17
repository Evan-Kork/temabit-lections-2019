import gql from 'graphql-tag'

export interface iErrorInvertory {
    title: string
    info: string
    date: string
}

export const ADD_ERROR_INVERTORY = gql`
    mutation($error: AddError!){
        addError(error: $error){
            title
            info
            date
        }
    }
`
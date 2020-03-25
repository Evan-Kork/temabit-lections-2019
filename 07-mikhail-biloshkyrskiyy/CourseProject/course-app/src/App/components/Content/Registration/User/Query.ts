import gql from 'graphql-tag'
import { iUser, iRegistrationResult } from '@/interfaces/iUser'

export interface UserInvertoryData {
    registration: iRegistrationResult
}

export interface UserInvertoryVars {
    user: iUser
}

export const GET_USER_INVERTORY = gql`
mutation($user: AddUser!) {
    registration(user: $user) {
        success
        message
    }
}
`
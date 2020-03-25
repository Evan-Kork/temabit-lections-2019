import gql from 'graphql-tag'

import { iAuth, iLogin } from '@/interfaces/iUser'

export interface AuthInvertoryData {
    auth: iAuth
}

export interface LoginInvertoryVars {
    login: iLogin
}

export const GET_AUTH_JWT = gql`
    mutation($login: Login!) {
        auth(login: $login) {
            jwt
        }
    }
`
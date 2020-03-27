import gql from 'graphql-tag'

import { iAuth, iLogin } from '@/interfaces/iAuth'

export interface AuthInvertoryData {
    login: iAuth
}

export interface LoginInvertoryVars {
    auth: iLogin
}

export const GET_AUTH_JWT = gql`
query($auth: Login!){
    login(auth: $auth){
        jwt
        success
    }
}
`
import gql from 'graphql-tag'
import { iUser, iCompany, iApiResult } from '@/interfaces/iAuth'

export interface UserInvertoryData {
    registrationUser: iApiResult
}

export interface UserInvertoryVars {
    user: iUser
}

export const GET_USER_INVERTORY = gql`
mutation($user: AddUser!) {
    registrationUser(user: $user) {
        success
        message
    }
}
`

export interface CompanyInvertoryData {
    registrationCompany: iApiResult
}

export interface CompanyInvertoryVars {
    company: iCompany
}

export const GET_COMPANY_INVERTORY = gql`
mutation($company: AddCompany!) {
    registrationCompany(company: $company) {
        success
        message
    }
}
`
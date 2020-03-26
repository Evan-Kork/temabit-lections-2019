import { gql } from 'apollo-server-express'
import { iLogin } from '@/interfaces/iAuth'

export const EnumAccessibilityTypeGql = gql`
    enum EnumAccessibilityType {
        User,
        Company,
        Moderator,
        Administrator
    }
`
export const TypeRegistrationResult = gql`
    type RegistrationResult {
        success: Boolean,
        message: String
    }
`

export const AuthType = gql`
    type AuthType {
        jwt: String
    }

    input Login {
        login: String!,
        password: String!
    }
`

export const TypeDefsMutation = `
    auth(login: Login!): AuthType
`

export const Mutation = {
    auth: (parent: any, args: { login: iLogin }) => {
        console.log(args.login)
        return { jwt: 'test' }
    }
}
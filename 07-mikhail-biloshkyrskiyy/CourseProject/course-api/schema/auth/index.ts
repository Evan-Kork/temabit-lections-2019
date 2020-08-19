import { gql } from 'apollo-server-express'

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
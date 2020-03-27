import { gql } from 'apollo-server-express'
import { model } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { iLogin, iUser, iCompany } from '@/interfaces/iAuth'
import keys from '@/config/keys'

import '@/models/auth/user'
import '@/models/auth/company'
const User = model('User')
const Company = model('Company')

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
        success: Boolean
    }

    input Login {
        login: String!,
        password: String!
    }
`

export const TypeDefsQuery = `
    login(auth: Login!): AuthType
`

export const Query = {
    login: async (parent: any, args: { auth: iLogin }) => {
        const user = await User.findOne({ login: args.auth.login }) as unknown as iUser
        if (user !== null) {
            const isPasswords = await bcrypt.compare(args.auth.password, user.password)
            if (isPasswords) {
                const token = jwt.sign({ ...user }, keys.JWT, { expiresIn: 60 * 60 })

                return {
                    jwt: token,
                    success: true
                }
            }
            else {
                return {
                    jwt: undefined,
                    success: false
                }
            }
        } else {
            const company = await Company.findOne({ login: args.auth.login }) as unknown as iCompany
            const isPasswords = await bcrypt.compare(args.auth.password, company.password)

            if (isPasswords) {
                const token = jwt.sign({ ...company }, keys.JWT, { expiresIn: 60 * 60 })

                return {
                    jwt: token,
                    success: true
                }
            }
            else {
                return {
                    jwt: undefined,
                    success: false
                }
            }
        }
    }
}
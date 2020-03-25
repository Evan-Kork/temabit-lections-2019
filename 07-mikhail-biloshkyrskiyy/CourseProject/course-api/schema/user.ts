import { gql } from 'apollo-server-express'
import { model } from 'mongoose'

import { iUser, iLogin } from '@/interfaces/iUser'
import { UserAccessibilityEnum } from '@/enum/user'

import '@/models/user'
const User = model('User')

const EnumUserTypeGql = gql`
    enum EnumUserType {
        User,
        Moderator,
        Administrator
    }
`
export const UserType = gql`
    ${EnumUserTypeGql}

    type UserType {
        id: String,
        login: String,
        password: String,
        email: String,
        phone: String,
        name: String,
        region: String,
        city: String,
        birthday: String,
        parcelDepartment: String,
        accessibility: EnumUserType
    }

    type AuthType {
        jwt: String
    }

    type RegistrationResult {
        success: Boolean,
        message: String
    }

    input Login {
        login: String!,
        password: String!
    }

    input AddUser {
        id: String,
        login: String!,
        password: String!,
        email: String!,
        phone: String!,
        name: String!,
        region: String,
        city: String,
        birthday: String,
        parcelDepartment: String,
        accessibility: EnumUserType
    }

    input UpdateUser {
        id: String,
        login: String!,
        password: String!,
        email: String,
        phone: String,
        name: String,
        region: String,
        city: String,
        birthday: String,
        parcelDepartment: String,
        accessibility: EnumUserType
    }
`

export const TypeDefsQuery = `
    user: [UserType],
    getTypeUser(type: EnumUserType!): [UserType]
`

export const TypeDefsMutation = `
    auth(login: Login!): AuthType
    registration(user: AddUser!): RegistrationResult,
    removeUser(id: String!): UserType,
    updateUser(user: UpdateUser!): UserType,
`

export const Query = {
    user: () => User.find()
}

export const Mutation = {
    auth: (parent: any, args: { login: iLogin }) => {
        console.log(args.login)
        return { jwt: 'test' }
    },
    registration: async (parent: any, args: { user: iUser }) => {
        try {
            if (await User.findOne({ login: args.user.login, email: args.user.email }) === null) {
                new User({
                    login: args.user.login,
                    password: args.user.password,
                    email: args.user.email,
                    phone: args.user.phone,
                    name: args.user.name,
                    region: args.user.region,
                    city: args.user.city,
                    birthday: args.user.birthday,
                    parcelDepartment: args.user.parcelDepartment,
                    accessibility: args.user.accessibility
                }).save()

                return {
                    success: true,
                    message: 'Successfully logged in user'
                }
            }
            else {
                return {
                    success: false,
                    message: 'This login or email is present in the database'
                }
            }
        } catch (error) {
            return {
                success: false,
                message: error
            }
        }
    },
    removeUser: async (parent: any, args: { id: string }) => {
        return await User.findByIdAndRemove(args.id)
    },
    updateUser: async (parent: any, args: { user: iUser }) => {
        return await User.findOneAndUpdate({ login: args.user.login }, {
            $set: {
                login: args.user.login,
                password: args.user.password,
                email: args.user.email,
                phone: args.user.phone,
                name: args.user.name,
                region: args.user.region,
                city: args.user.city,
                birthday: args.user.birthday,
                parcelDepartment: args.user.parcelDepartment,
                accessibility: args.user.accessibility
            }
        }).setOptions({ omitUndefined: true })
    }
}
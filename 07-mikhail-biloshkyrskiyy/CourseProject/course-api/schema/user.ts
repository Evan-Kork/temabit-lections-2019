import { gql } from 'apollo-server'
import { model } from 'mongoose'

import { iUser } from '@/interfaces/iUser'
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
        accessibility: EnumUserType,
        password: String,
        email: String
    }

    input AddUser {
        id: String,
        login: String!,
        accessibility: EnumUserType,
        password: String,
        email: String
    }

    input UpdateUser {
        id: String,
        login: String!,
        accessibility: EnumUserType!,
        password: String!,
        email: String!
    }
`

export const TypeDefsQuery = `
    user: [UserType],
    getTypeUser(type: EnumUserType!): [UserType]
`

export const TypeDefsMutation = `
    addUser(user: AddUser!): UserType,
    removeUser(id: String!): UserType,
    updateUser(user: UpdateUser!): UserType
`

export const Query = {
    user: () => User.find()
}

export const Mutation = {
    addUser: async (parent: any, args: { user: iUser }) => {
        if (await User.findOne({ login: args.user.login }) === null) {
            const user = new User({
                login: args.user.login,
                accessibility: args.user.accessibility,
                password: args.user.password,
                email: args.user.email
            })
            return user.save()
        }
    },
    removeUser: async (parent: any, args: { id: string }) => {
        return await User.findByIdAndRemove(args.id)
    },
    updateUser: async (parent: any, args: { user: iUser }) => {
        return await User.findOneAndUpdate({ login: args.user.login }, {
            $set: {
                login: args.user.login,
                accessibility: args.user.accessibility,
                password: args.user.password,
                email: args.user.email
            }
        }).setOptions({ omitUndefined: true })
    }
}
import { gql } from 'apollo-server-express'
import { model } from 'mongoose'
import bcrypt from 'bcryptjs'

import { iUser } from '@/interfaces/iAuth'
import { AccessibilityType } from '@/enum/auth'

import '@/models/auth/user'
const User = model('User')

export const UserType = gql`
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
        accessibility: EnumAccessibilityType
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
        accessibility: EnumAccessibilityType
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
        accessibility: EnumAccessibilityType
    }
`

export const TypeDefsQuery = `
    user: [UserType],
    getTypeUser(type: EnumAccessibilityType!): [UserType]
`

export const TypeDefsMutation = `
    registrationUser(user: AddUser!): RegistrationResult,
    removeUser(id: String!): UserType,
    updateUser(user: UpdateUser!): UserType,
`

export const Query = {
    user: () => User.find(),
    getTypeUser: async (parent: any, args: { accessibility: AccessibilityType }) => await User.find({ accessibility: args.accessibility }),
}

export const Mutation = {
    registrationUser: async (parent: any, args: { user: iUser }) => {
        try {
            if (await User.findOne({ login: args.user.login, email: args.user.email }) === null) {
                const salt = await bcrypt.genSalt(10)

                new User({
                    login: args.user.login,
                    password: await bcrypt.hash(args.user.password, salt),
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
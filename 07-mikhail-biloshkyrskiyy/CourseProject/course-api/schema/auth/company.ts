import { gql } from 'apollo-server-express'
import { model } from 'mongoose'
import bcrypt from 'bcryptjs'

import { iCompany } from '@/interfaces/iAuth'
import { AccessibilityType } from '@/enum/auth'

import '@/models/auth/company'
const Company = model('Company')

export const CompanyType = gql`
    type CompanyType {
        id: String,
        login: String,
        password: String,
        email: String,
        phone: String,
        name: String,
        region: String,
        city: String,
        parcelDepartment: String,
        accessibility: EnumAccessibilityType
    }

    input AddCompany {
        id: String,
        login: String!,
        password: String!,
        email: String!,
        phone: String!,
        name: String!,
        region: String,
        city: String,
        parcelDepartment: String,
        accessibility: EnumAccessibilityType
    }

    input UpdateCompany {
        id: String,
        login: String!,
        password: String!,
        email: String,
        phone: String,
        name: String,
        region: String,
        city: String,
        parcelDepartment: String,
        accessibility: EnumAccessibilityType
    }
`

export const TypeDefsQuery = `
    company: [CompanyType],
    getTypeCompany(type: EnumAccessibilityType!): [CompanyType]
`

export const TypeDefsMutation = `
    registrationCompany(company: AddCompany!): RegistrationResult,
    removeCompany(id: String!): CompanyType,
    updateCompany(company: UpdateCompany!): CompanyType,
`

export const Query = {
    company: () => Company.find(),
    getTypeCompany: async (parent: any, args: { accessibility: AccessibilityType }) => await Company.find({ accessibility: args.accessibility }),
}

export const Mutation = {
    registrationCompany: async (parent: any, args: { company: iCompany }) => {
        try {
            if (await Company.findOne({ login: args.company.login, email: args.company.email }) === null) {
                const salt = await bcrypt.genSalt(10)

                new Company({
                    login: args.company.login,
                    password: await bcrypt.hash(args.company.password, salt),
                    email: args.company.email,
                    phone: args.company.phone,
                    name: args.company.name,
                    region: args.company.region,
                    city: args.company.city,
                    parcelDepartment: args.company.parcelDepartment,
                    accessibility: args.company.accessibility
                }).save()

                return {
                    success: true,
                    message: 'Successfully logged in company'
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
        return await Company.findByIdAndRemove(args.id)
    },
    updateUser: async (parent: any, args: { company: iCompany }) => {
        return await Company.findOneAndUpdate({ login: args.company.login }, {
            $set: {
                login: args.company.login,
                password: args.company.password,
                email: args.company.email,
                phone: args.company.phone,
                name: args.company.name,
                region: args.company.region,
                city: args.company.city,
                parcelDepartment: args.company.parcelDepartment,
                accessibility: args.company.accessibility
            }
        }).setOptions({ omitUndefined: true })
    }
}
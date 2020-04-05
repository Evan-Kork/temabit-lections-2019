import jwt from 'jsonwebtoken'
import { model } from 'mongoose'

import '@/models/auth/user'
import '@/models/auth/company'

const User = model('User')
const Company = model('Company')

import keys from '@/config/keys'
import { iUser, iCompany } from '@/interfaces/iAuth'

export default async function authentication(token: string) {
    try {
        //@ts-ignore
        const { email, password, accessibility } = jwt.verify(token, keys.JWT)._doc
        if (accessibility === 'User') {
            const user = await User.findOne({ email }) as unknown as iUser
            if (password === user.password) {
                return {
                    isAuth: true,
                    user
                }
            } else {
                return {
                    isAuth: false,
                    user: null
                }
            }
        } else if (accessibility === 'Company') {
            const company = await Company.findOne({ email }) as unknown as iCompany
            if (password === company.password) {
                return {
                    isAuth: true,
                    user: company
                }
            } else {
                return {
                    isAuth: false,
                    user: null
                }
            }
        }
    } catch (error) { }
}
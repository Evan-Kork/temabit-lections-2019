import { Request, Response } from 'express'
import { model } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { iLogin, iUser, iCompany } from '@/interfaces/iAuth'
import keys from '@/config/keys'

import '@/models/auth/user'
import '@/models/auth/company'
const User = model('User')
const Company = model('Company')

export const login = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ email: req.body.email }) as unknown as iUser
        if (user !== null) {
            const isPasswords = await bcrypt.compare(req.body.password, user.password)
            if (isPasswords) {
                res.cookie('jwt', jwt.sign({ ...user }, keys.JWT, { expiresIn: 60 * 60 }))
                res.json({
                    user,
                    message: 'Login successful',
                    success: true
                })
            }
            else {
                res.json({
                    user: null,
                    message: 'Not a correct password',
                    success: false
                })
            }
        } else {
            const company = await Company.findOne({ login: req.body.email }) as unknown as iCompany
            const isPasswords = await bcrypt.compare(req.body.password, company.password)

            if (isPasswords) {
                res.cookie('jwt', jwt.sign({ ...company }, keys.JWT, { expiresIn: 60 * 60 }))
                res.json({
                    user: company,
                    message: 'Login successful',
                    success: true
                })
            }
            else {
                res.json({
                    user: null,
                    message: 'Not a correct password',
                    success: false
                })
            }
        }
    } catch (error) {
        res.json({
            user: null,
            message: 'Not a correct email entry try again',
            success: false
        })
    }
}
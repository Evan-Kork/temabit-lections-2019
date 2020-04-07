import { Request, Response } from 'express'
import { model } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { iUser, iCompany } from '@/interfaces/iAuth'
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
                res.cookie('jwt', jwt.sign({ ...user }, keys.JWT, { expiresIn: 72000 }))
                //@ts-ignore
                req.session.user = user

                res.json({
                    user,
                    result: {
                        message: 'Login successful',
                        success: true
                    },
                    token: {
                        time: 72000
                    }
                })
            }
            else {
                res.json({
                    user: null,
                    result: {
                        message: 'Not a correct password',
                        success: false
                    }
                })
            }
        } else {
            const company = await Company.findOne({ login: req.body.email }) as unknown as iCompany
            const isPasswords = await bcrypt.compare(req.body.password, company.password)
            if (isPasswords) {
                res.cookie('jwt', jwt.sign({ ...company }, keys.JWT, { expiresIn: 72000 }))
                //@ts-ignore
                req.session.user = company

                res.json({
                    user: company,
                    result: {
                        message: 'Login successful',
                        success: true
                    },
                    token: {
                        time: 72000
                    }
                })
            }
            else {
                res.json({
                    user: null,
                    result: {
                        message: 'Not a correct password',
                        success: false
                    }
                })
            }
        }
    } catch (error) {
        res.json({
            user: null,
            result: {
                message: 'Not a correct email entry try again',
                success: false
            }
        })
    }
}
export const reloadingToken = async (req: Request, res: Response) => {
    if (req.cookies.jwt !== undefined) {
        try {
            //@ts-ignore
            const { email, password, accessibility } = jwt.verify(req.cookies.jwt, keys.JWT)._doc
            if (accessibility === 'User' || accessibility === 'Administrator' || accessibility === 'Moderator') {
                const user = await User.findOne({ email }) as unknown as iUser
                if (password === user.password) {
                    res.cookie('jwt', jwt.sign({ ...user }, keys.JWT, { expiresIn: 72000 }))
                    //@ts-ignore
                    req.session.user = user

                    res.json({
                        result: {
                            message: 'Reloading token successful',
                            success: true,
                        },
                        token: {
                            time: 72000
                        }
                    })
                } else {
                    res.json({
                        result: {
                            message: 'Not a correct password',
                            success: false
                        },
                        token: undefined
                    })
                }
            } else if (accessibility === 'Company') {
                const company = await Company.findOne({ email }) as unknown as iCompany
                if (password === company.password) {
                    res.cookie('jwt', jwt.sign({ ...company }, keys.JWT, { expiresIn: 72000 }))
                    //@ts-ignore
                    req.session.user = company

                    res.json({
                        result: {
                            message: 'Reloading token successful',
                            success: true,
                        },
                        token: {
                            time: 72000
                        }
                    })
                } else {
                    res.json({
                        result: {
                            message: 'Not a correct password',
                            success: false
                        },
                        token: undefined
                    })
                }
            }
        } catch (error) {
            res.json({
                result: {
                    message: 'Not a correct email entry try again',
                    success: false
                },
                token: undefined
            })
        }
    }
}
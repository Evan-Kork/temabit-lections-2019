import request from 'superagent'

import { iLogin, iUser, iApiResult } from '@/interfaces/iAuth'

export const apiLogin = async (value: iLogin): Promise<iUser & iApiResult> => {
    const { body } = await request
        .post(`/api/authorization/login`)
        .send(value)
    const { user, message, success } = body

    const result = {
        message,
        success
    }
    return new Promise(resolve => {
        resolve({ ...user, result })
    })
}
import request from 'superagent'

import { iLogin, iUser, iApiResult, iToken } from '@/interfaces/iAuth'

export const apiLogin = async (value: iLogin): Promise<iUser & iApiResult & iToken> => {
    const { body } = await request
        .post(`/api/authorization/login`)
        .send(value)
    return new Promise(resolve => {
        resolve(body)
    })
}

export const apiReloadingToken = async (): Promise<iApiResult & iToken> => {
    const { body } = await request.get(`/api/authorization/reloading-token`)
    return new Promise(resolve => {
        resolve(body)
    })
}
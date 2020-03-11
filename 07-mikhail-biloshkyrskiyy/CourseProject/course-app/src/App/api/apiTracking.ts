import request from 'superagent'

import { iTracking, iDeclaration } from '@/interfaces/iTracking'

export const apiTracking = async (value: iDeclaration): Promise<iTracking> => {
    const { body } = await request.get(`/api/tracking/${value.declaration}`)
    if (body.result[0].orderNumber !== null) {
        return new Promise(resolve => {
            resolve(body.result)
        })
    } else {
        return new Promise(() => {
            throw 'Non result'
        })
    }
}

export const apiTrackingHistory = async (value: iDeclaration): Promise<iTracking> => {
    const { body } = await request.get(`/api/tracking/history/${value.declaration}`)
    if (body.result[0].orderNumber !== null) {
        return new Promise(resolve => {
            resolve(body.result)
        })
    } else {
        return new Promise(() => {
            throw 'Non result'
        })
    }
}
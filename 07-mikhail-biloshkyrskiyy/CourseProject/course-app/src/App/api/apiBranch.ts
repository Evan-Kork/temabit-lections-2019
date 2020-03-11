import request from 'superagent'

import { iBranch, iLocation, iFormat, iLocalities } from '@/interfaces/iBranch'
import { LocalitiesType } from '@/interfaces/iBranch'

export const apiBranchAll = async (): Promise<iBranch> => {
    const { body } = await request.get(`/api/branches`)

    if (body.status === 1) {
        return new Promise(resolve => {
            resolve(body.result)
        })
    } else {
        return new Promise(() => {
            throw 'Non result'
        })
    }
}

export const apiBranchId = async (id: number): Promise<iBranch> => {
    const { body } = await request.get(`/api/branches/${id}`)

    if (body.status === 1) {
        return new Promise(resolve => {
            resolve(body.result)
        })
    } else {
        return new Promise(() => {
            throw 'Non result'
        })
    }
}

export const apiBranchLocality = async (value: iLocation): Promise<iBranch> => {
    const { body } = await request.post(`/api/branches/locality`)
        .send({ 'locality': value.location })

    if (body.status === 1) {
        return new Promise(resolve => {
            resolve(body.result)
        })
    } else {
        return new Promise(() => {
            throw 'Non result'
        })
    }
}

export const apiBranchLocator = async (value: iLocation): Promise<iBranch> => {
    const { body } = await request.post(`/api/branches/locator`)
        .send({ 'locator': value.location })

    if (body.status === 1) {
        return new Promise(resolve => {
            resolve(body.result)
        })
    } else {
        return new Promise(() => {
            throw 'Non result'
        })
    }
}

export const apiBranchTypes = async (): Promise<iFormat> => {
    const { body } = await request.get(`/api/branches/types`)

    if (body.status === 1) {
        return new Promise(resolve => {
            resolve(body.result)
        })
    } else {
        return new Promise(() => {
            throw 'Non result'
        })
    }
}

export const apiLocalities = async (type: LocalitiesType): Promise<iLocalities> => {
    const { body } = await request.get(`/api/localities/${type}`)

    if (body.status === 1) {
        return new Promise(resolve => {
            resolve(body.result)
        })
    } else {
        return new Promise(() => {
            throw 'Non result'
        })
    }
}
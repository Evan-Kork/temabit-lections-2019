import request from 'superagent'

import { iOffice, iLocation, iFormat, iLocalities } from '@/interfaces/iOffice'
import { LocalitiesType } from '@/interfaces/iOffice'

export const apiOfficeAll = async (): Promise<iOffice> => {
    const { body } = await request.get(`/api/office`)

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

export const apiOfficeId = async (id: number): Promise<iOffice> => {
    const { body } = await request.get(`/api/office/${id}`)

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

export const apiOfficeLocality = async (value: iLocation): Promise<iOffice> => {
    const { body } = await request.post(`/api/office/locality`)
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

export const apiOfficeLocator = async (value: iLocation): Promise<iOffice> => {
    const { body } = await request.post(`/api/office/locator`)
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

export const apiOfficeTypes = async (): Promise<iFormat> => {
    const { body } = await request.get(`/api/office/types`)

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
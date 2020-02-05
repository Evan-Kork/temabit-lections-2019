import { iMultiple } from '~interface/iMultiple'

export const apiMultiple = async (value: iMultiple): Promise<iMultiple> => {
    return new Promise(resolve => {
        const first = value.first.toString().split(',').map(value => +value)
        const second = value.second.toString().split(',').map(value => +value)
        resolve({first, second})
    })
}
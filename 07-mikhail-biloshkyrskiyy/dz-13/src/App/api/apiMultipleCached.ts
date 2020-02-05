import { iMultipleCached } from '~interface/iMultipleCached'

export const apiMultipleCached = async (value: iMultipleCached): Promise<iMultipleCached> => {
    return new Promise(resolve => {
        const first = value.first.toString().split(',').map(value => +value)
        const second = value.second.toString().split(',').map(value => +value)
        const third = value.third.toString().split(',').map(value => +value)

        resolve({first, second, third})
    })
}
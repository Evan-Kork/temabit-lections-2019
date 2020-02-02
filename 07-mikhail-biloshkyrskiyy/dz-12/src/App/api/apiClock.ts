import { iClock } from '~interface/iClock'

export const apiClock = async (value: iClock): Promise<iClock> => {
    return new Promise(resolve => {
        resolve(value)
    })
}
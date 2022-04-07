import { iMessage } from '~interface/iMessage'

export const apiMessage = async (value: string): Promise<iMessage> => {
    return new Promise(resolve => {
        resolve({ "text": value })
    })
}
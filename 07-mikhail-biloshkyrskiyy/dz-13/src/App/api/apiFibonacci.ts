import { iFibonacci } from '~interface/iFibonacci'

export const apiFibonacci = async (value: iFibonacci): Promise<iFibonacci> => {
    return new Promise(resolve => {
        const fibonacci = +value.fibonacci.toString()
        resolve({ fibonacci })
    })
}
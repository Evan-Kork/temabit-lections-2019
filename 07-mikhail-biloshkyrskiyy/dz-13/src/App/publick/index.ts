export const intersection = (first: number[], second: number[]): number[] => {
    try {
        return first.filter(Set.prototype.has, new Set(second))
    } catch(error) {
        throw 'Ошибка ввода данных'
    }
}

export const fi = cached((number: number) => number === 0 || number === 1 ? number : fi(number - 2) + fi(number - 1))
function cached(func: Function) {
    const map = new Map()
    return function (number: number) {
        const result = map.get(number)
        if (typeof result === 'function') {
            return result()
        } else {
            try {
                const res = func(number)
                map.set(number, () => res)
                return res
            } catch (e) {
                map.set(number, () => { throw e; })
                throw e
            }
        }
    }
}

type T = any[]
type Callback = (a: number, b: number, c: number) => number

const getValues = (arr: number[]) => arr.shift()
const setArrayValues = (number: number, arr: number[]) => arr.push(number)
const getArrayValues = (iterables: [][]) => {
    const array: number[] = []
    for (let iterator of iterables.map(values => getValues(values))) {
        if (typeof iterator !== 'undefined') {
            setArrayValues(iterator, array)
        } else {
            throw Error
        }
    }
    return array
}
export function* map(operator: Callback, ...iterables: T) {
    try {
        while (true) {
            //@ts-ignore
            yield operator(...getArrayValues(iterables))
        }
    } catch (err) { }
}
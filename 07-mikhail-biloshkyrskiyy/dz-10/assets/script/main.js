// Array data
const array_1 = [1, 2, 3, 4, 5, 6, 7]
const array_2 = ['Kiev', 'Beijing', 'Lima', 'Saratov']
const array_3 = [2, 1, 1, 3, 2]
const array_4 = [7, -2, 10, 5, 0]
const array_5 = [0, 10]
const array_6 = ['Beijing', 'Kiev']
const array_7 = ['Kiev', 'London', 'Baghdad']
const array_8 = [55, 44, 22, -10]
const array_9 = [44, 55, -10]
const array_10 = ['top', 'bottom', 'top', 'left']

function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b)
        }
    }
}

function equals(item_1, item_2) {
    if (item_1 === item_2) {
        return true
    }
    return false
}

function unique(arr) {
    const result = [];

    arr.forEach(item => {
        if (!result.includes(item)) {
            result.push(item);
        }
    })

    return result;
}

function difference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item))
}

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Error code
const ERROR_NOT_RANGE = -1
// Action type
const ARRAY_NOT_ELEMENT = 'ARRAY_NOT_ELEMENT'
// Error message
function error(message) {
    console.log(message)
}
// Selectors
const getEquals = curry((item_1, item_2) => equals(item_1, item_2))
const getIndex = curry((fn, arr) => arr.findIndex(item => fn(item)))
const getRemove = curry((fn, arr) => (equals(fn(arr), ERROR_NOT_RANGE) ? [] : arr).splice(fn(arr), 1))
const getRemoveElement = (item, arr) => {
    getRemove(getIndex(getEquals(item)))(arr)
    return arr
}
const getUniq = arr => unique(arr)
const getDifference = (arr_1, arr_2) => difference(arr_1, arr_2)
const getMissing = (arr_1, arr_2) => difference(arr_2, arr_1)
// Remove element
const removeElement = (item, arr) => {
    const result = getRemoveElement(item, arr)
    return isEmpty(result) ? error(`${ARRAY_NOT_ELEMENT}`) : result
}
// Remove elements
const removeElements = (items, arr) => {
    items.forEach(item => {
        const result = getRemoveElement(item, arr)
        isEmpty(result) ? error(`${ARRAY_NOT_ELEMENT}`) : arr = result
    })

    return arr
}

// Print
console.log(removeElement(array_1[4], array_1))
console.log(removeElement(array_2[2], array_2))
console.log(removeElements([5, -1, 2], array_1))
console.log(removeElement('Berlin', array_2))

console.log(getUniq(array_3))
console.log(getUniq(array_10))

console.log(getDifference(array_4, array_5))
console.log(getDifference(array_6, array_7))

console.log(getMissing(array_9, array_8))
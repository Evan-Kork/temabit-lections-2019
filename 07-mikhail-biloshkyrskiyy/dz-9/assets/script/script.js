/* P-1 */
/* function promptGetNumber(defaultText) {
    return +prompt(defaultText)
}
function printToNumber(number) {
    if (!isNaN(number)) {
        if (number <= 0) {
            alert('вы ввели неверно, повторите')
            return true
        } else {
            let i = 1, sum = 0
            while (i <= number) { 
                sum += i
                i++ 
            }
            alert(`сумма чисел от ${1} до ${number} = ${sum}`)
            return false
        }
    } else {
        alert('вы ввели не число, введите число')
        return true
    }
}

while (true) {
    if (!printToNumber(promptGetNumber('введите число'))) {
        if (!confirm('повторить вывод чисел')) {
            break
        }
    }
} */

/* P-2 */
// Get Col
/* const col = R.curry(function (value) {
    return `<td>${value}</td>`
})
// Get Row
const row = R.curry(function (fn, values) {
    return `<tr>${R.map(fn, values).join('')}</tr>`
})
// Get Table
const table = R.curry(function (fn, value) {
    return `<table  class="table table-bordered">${R.map(fn, value).join('')}</table>`
})

const getTable = table(row(col()))

function calculation() {
    const arrRow = []

    for (let i = 0; i < 10; i++) {
        const arrCol = []
        for (let j = 0; j < 10; j++) {
            arrCol[j] = `${i + 1} * ${j + 1} = ${(i + 1) * (j + 1)}`
        }
        arrRow[i] = arrCol
    }

    return arrRow
}

function addHTML(element) {
    document.body.innerHTML = element
}

document.addEventListener('DOMContentLoaded', () => {
    const calc = calculation()

    addHTML(getTable(calc))
}) */

/* P-3 */
/* const minNumber = 1
const maxNumber = 10
function promptGetNumber(defaultText) {
    return +prompt(defaultText)
}

function addHTML(element) {
    document.body.innerHTML += element
}

const ARR_FIB = []
const decorator = R.curry(function (obj, value) {
    obj.push(`<div class="fib">${value}</div>`)
})
const fib = R.curry(function (fn, value) {
    fn(value)
    return value <= 1 ? value : getArrFib(value - 1) + getArrFib(value - 2)
})
const getArrFib = fib(decorator(ARR_FIB))

function decoratorFib(arr, number = 0, offset = 1) {
    if (number < arr.length) {
        arr[number] += '</br>'
        number += offset + 1
        offset += 1
        decoratorFib(arr, number, offset)
    }
}

const addHtmlFib = (number, arr) => {
    addHTML(`число ${number} = ${getArrFib(number)}(фиббоначи)</br>`)
    decoratorFib(arr)
    addHTML(arr.join(''))
}

document.addEventListener('DOMContentLoaded', () => {
    const result = promptGetNumber('Введите число от (1-100)')
    R.both(result >= minNumber, result <= maxNumber, !isNaN(result)) ?
        addHtmlFib(result, ARR_FIB) :
        arr('false: Введите число от (1-100)')
}) */
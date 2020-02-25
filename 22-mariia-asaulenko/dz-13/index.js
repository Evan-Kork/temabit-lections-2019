// Задача: Перетин множин
const array1 = [1, 2, 2, 3, 4, 5];
const array2 = [2, 3, 3, 4, 5, 6];

function intersection(...arrays) {
    return arrays.reduce((result, array, index) => {
        return index === 0 ? [...new Set(array)] : result.filter((item) => array.includes(item))
    }, [])
}
console.log('inters', intersection(array1, array2));


// Задача: Кешована функція

function cached(f) {
    const map = new Map()
    return function (n) {
        if (map.has(n)) {
            return map.get(n)
        }
        const resalt = f(n)
        map.set(n, resalt)
        return resalt
    }
}

const fi = cached(function (n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fi(n - 2) + fi(n - 1);
    }
});

console.log('fi', fi(50))

// Задача: Генералізоване відображення
function* map(operator, ...iterables) {
    let index = 0;
    while (iterables[0][index]) {
        yield operator(iterables.reduce((acc, array) =>
            [...acc, array[index]], []))
        index += 1;
    }
}


const result = map(
    function (array) {
        console.log('a', array)
        return (array[0] + array[1]) * array[2];
    },
    [1, 2, 3, 4, 5, 6],
    [10, 20, 30, 40, 50, 7],
    [1, -1, 1, -2, 3]
);

console.log('result', Array.from(result));
    // [11, -22, 33, -88, 165]





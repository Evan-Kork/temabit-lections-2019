// Видалити елемент з масиву
let removeElement = (array, item) => {
    array.forEach((i, index) => {
        if (i === item) array.splice(index,1)
    });

    return array;
};

// Видалити декілька елементів з масиву
function removeElements(arr) {
    let restArguments = Array.from(arguments);
    restArguments.shift();
    
    for(let i = 0; i < arr.length; i++) {
        restArguments.forEach(j => {
            if (arr[i] === j) arr.splice(i,1)
        })
    }

    return arr;
};

// Видалити повторні значення з масиву
let unique = (array) => [...new Set(array)];

// Знайти різницю масивів
let difference = (array1, array2) => array1.filter(i => !array2.includes(i));
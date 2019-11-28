// Видалити елемент з масиву
let removeElement = (array, item) => {
    array.forEach((i, index, arr) => {
        if (i === item) arr.splice(index,1)
    });

    return array;
};

// Видалити декілька елементів з масиву
let removeElements = (array, ...items) => {
    array.forEach((i, index, arr) => {
        items.forEach(j => {
            if (i === j) arr.splice(index,1)
        })
    });

    return array;
};

// Видалити повторні значення з масиву
let unique = (array) => [...new Set(array)];

// Знайти різницю масивів
let difference = (array1, array2) => array1.filter(i => !array2.includes(i));
/* #1
Реализуйте функцию removeElement(array, item) для удаления элемента item из массива array. */
console.log("Task 1")

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

function removeElement(array, item) {
    let index = array.indexOf(item);
    if (index != -1) {
        array.splice(index, 1);
    }
    return array;
}

removeElement(array1, 5);
console.log(array1); // Результат: [1, 2, 3, 4, 6, 7]

removeElement(array2, 'Lima'); // удалит 'Lima' из массива
removeElement(array2, 'Berlin'); // не удалит ничего
console.log(array2); // Результат: ['Kiev', 'Beijing', 'Saratov']


/* #2
Улучшите функцию из предыдущего задания для удаления нескольких элементов из массива removeElements(array, item1, ... itemN). */
console.log("Task 2")

const array3 = [1, 2, 3, 4, 5, 6, 7];

function removeElements(array, ...items) {
    for (item of items) {
        let index = array.indexOf(item);
        if (index != -1) {
            array.splice(index, 1);
        }
    }
    return array;
}

removeElements(array3, 5, 1, 6);
console.log(array3); // Результат: [2, 3, 4, 7]

const array4 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array4, 'Lima', 'Berlin', 'Kiev');
console.log(array4); // Результат: ['Beijing', 'Saratov']



/* #3
Функция unique(array) должна возвращать новый массив, не содержащий дубликатов. */
console.log("Task 3")

function unique(array) {
    for (let i = array.length - 1; i > 1; i--) {
        for (let j = 0; j < i; j++) {
            if (array[i] === array[j]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);

const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2); // Результат: ['top', 'bottom', 'left']



/*#4
Функция difference(array1, array2) должна находить разницу между массивами,  возвращать новый массив, 
содержащий значения, которые содержались в array1, но не содержались в array2.*/
console.log("Task 4")

const array5 = [7, -2, 10, 5, 0];
const array6 = [0, 10];

function difference(arr1, arr2) {
    let newarr = [];
    for (item1 of arr1) {
        if (!arr2.includes(item1)) {
            newarr.push(item1);
        }
    }
    return newarr;

}

const res = difference(array5, array6);
console.log(res); // Результат: [7, -2, 5]
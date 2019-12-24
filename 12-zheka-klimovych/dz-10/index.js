// Task1 Реализуйте функцию removeElement(array, item) для удаления элемента item из массива array

const array = [1, 1,  1, 2, 3, 4, 5];
function removeElement(array, item) {   
 
    for (var i = 0; i < array.length; i++) {    
        let wasSplice = false;    
        if (array[i] === item) {            
            array.splice(i, 1);  
            wasSplice = wasSplice ? wasSplice:true;      
        }
        if (wasSplice) {
                --i;
        }
    }
}

removeElement(array, 1);
console.log(array);

// Task2 Улучшите функцию из предыдущего задания для удаления нескольких элементов из массива removeElements(array, item1, ... itemN).

const array = [1,1,2, 2, 3,3, 4,'sdfsdf'];

function removeElement(array) {
    const argArray = Array.prototype.slice.call(arguments, 1);
    let result = [];

    array.forEach((item) => {
        if (argArray.indexOf(item) === -1) {
            result.push(item);
        }
    });

    return result;
}
removeElement(array, 1, 2, 3);
console.log(array);

// через for
const array = [1, 1, 2, 2, 3, 3, 4,'sdfsdf'];
function removeElement(array) {
    const argArray = Array.prototype.slice.call(arguments, 1);
    let result = [];
    
    for (let i = 0; i < array.length; i++) {
        if (argArray.indexOf(array[i]) === -1) {
            result.push(array[i]);
        }
    }

    return result;
}
console.log(removeElement(array, 1, 2, 3));


// Task3 Функция unique(array) должна возвращать новый массив, не содержащий дубликатов.

const array = [1, 1, 2, 2, 3, 3, 4, 'fsdfasd'];

function unique(array) {
    let uniqueArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }

    return uniqueArray;
}
console.log(unique(array));

// Task4 Функция difference(array1, array2) должна находить разницу между массивами, т.е. возвращать новый массив, содержащий значения, которые содержались в array1, но не содержались в array2.

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [1, 2,];

    function difference(array1, array2) {
        let result = [];
        for (let i = 0; i < array1.length; i++) {
            if (array2.indexOf(array1[i]) === -1) {
            result.push(array1[i]);
            }; 
        }

    return result;
    
    }
    console.log(difference(array1,array2));
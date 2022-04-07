//  ======= #1 Видалити елемент з масиву =======
let removeElement = (array, item) => {
    array.forEach((i, index) => {
        if (i === item) array.splice(index,1)
    });

    return array;
};
// #1 Test 
const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 5);
console.log('#1:',array1);

// ======= #2 Видалити декілька елементів з масиву =======
function removeElements(arr) {
    let restArguments = Array.from(arguments);
    restArguments.shift();
    restArguments.sort();

    for(let i = 0; i < arr.length; i++) {
        let wasSplice = false;
        restArguments.forEach(j => {
            if (arr[i] === j) {
                arr.splice(i,1);
                wasSplice = wasSplice ? wasSplice : true;
            }
        })
        if(wasSplice) {--i}
    }

    return arr;
};
// #2 Test 
const array2 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array2, 7, 6, 5);
console.log('#2:',array2);

// ======= #3 Видалити повторні значення з масиву =======
let unique = (array) => {
    let newArr = [];

    array.forEach(i => {
        if ( !newArr.includes(i) ) newArr.push(i);
    });

    return newArr
};
// #3 Test 
const result = unique([2, 1, 1, 3, 2]);
console.log('#3:', result);

// ======= #4 Знайти різницю масивів =======
let difference = (array1, array2) => array1.filter(i => !array2.includes(i));
// #4 Test 
const arr1 = [7, -2, 10, 5, 0];
const arr2 = [0, 10];
const diff = difference(arr1, arr2);
console.log('#4:', diff);

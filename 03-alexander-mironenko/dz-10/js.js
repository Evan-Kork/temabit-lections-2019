function removeElement(array, item) {
    let index = array.indexOf(item);
    if (index != -1) {
        array.splice(index, 1);
    }
    return array;
}
function removeElements(array) {
    for (let i = 0; i < arguments.length; i++) {
        let index = array.indexOf(arguments[i]);
        if (index != -1) {
            array.splice(index, 1);
        }
    }
    return array;
}
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
function difference(arr1, arr2) {
    let newarr = [];
    for (item1 of arr1) {
        if (!arr2.includes(item1)) {
            newarr.push(item1);
        }
    }
    return newarr;
}
function missing(arr1, arr2) {
    let newarr = [];
    for (item1 of arr1) {
        if (!arr2.includes(item1)) {
            newarr.push(item1);
        }
    }
    return newarr;
}
//-1
const array_1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array_1, 5);
console.log(array_1);//[1, 2, 3, 4, 6, 7]
//-2
const array_2 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array_2, 2, 4, 7);
console.log(array_2);//[1, 3, 5, 6]
//-3
const array_3 = [1, 2, 1, 3, 2, 4, 4];
const array_4 = unique(array_3);
console.log(array_4);//[1, 2, 3, 4]
//-4
const array_5 = [7, -2, 10, 5, 0];
const array_6 = [0, 10];
const array_7 = difference(array_5, array_6);
console.log(array_7); // Результат: [7, -2, 5]
//-5
const array_8 = [55, 44, 22, -10];;
const array_9 = [44, 55, -10];
const array_10 = missing(array_8, array_9);
console.log(array_10); // Результат: [22]
let arrayNum = [1, 2, 3, 4, 5, 6, 7];
let arrayStr = ['Kiev', 'Beijing', 'Lima', 'Saratov'];



// TASK 1
function removeElement (array,itemToRemove){
    if(array.indexOf(itemToRemove) != -1){
        array.splice(array.indexOf(itemToRemove),1);
    }
    return array;
}
// console.log(removeElement(arrayNum, 10));
// console.log(removeElement(arrayStr, 'Lima'));


// TASK 2
function removeElements(){ // arguments(array, 'itemToRemove-1', 'itemToRemove-2', 'itemToRemove-n')
    let iterToRemove = 1;
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[iterToRemove] && arguments[0].indexOf(arguments[iterToRemove]) != -1){
            arguments[0].splice(arguments[0].indexOf(arguments[iterToRemove]),1);
        }
        iterToRemove++;
    }
    return arguments[0];
}
// console.log(removeElements(arrayStr, 'Kiev',5,'Saratov'));




// TASK 3
function unique(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if(!result.includes(array[i])){
            result.push(array[i]);
        }
    }
    return result;
}

const resultUnique = unique([2, 1, 1, 3, 2]);
const resultUnique2 = unique(['top', 'bottom', 'top', 'left']);
// console.log(resultUnique);
// console.log(resultUnique2);



// TASK 4
function difference(array1, array2){
    let result = [];
    let arrLong = [];
    let arrShort = [];
    if(array1.length > array2.length){
        arrLong = array1;
        arrShort = array2;
    }else{
        arrLong = array2;
        arrShort = array1;
    }

    for (let l = 0; l < arrLong.length; l++) {
        if(!arrShort.includes(arrLong[l])){
            result.push(arrLong[l]);
        }
    }
    return result;
}

const resultdifference = difference([7, -2, 10, 5, 0], [0, 10]);
const resultdifference1 = difference([0, 10, 55], [7, -2, 10, 5, 0, 3, 55]);
const resultdifference2 = difference(['Beijing', 'Kiev'], ['Kiev', 'London', 'Baghdad']);
// console.log(resultdifference);
// console.log(resultdifference1);
// console.log(resultdifference2);
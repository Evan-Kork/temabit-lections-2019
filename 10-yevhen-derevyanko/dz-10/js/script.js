let arrayNum = [1, 2, 3, 4, 5, 6, 7];
let arrayStr = ['Kiev', 'Beijing', 'Lima', 'Saratov'];


// TASK 1
function removeElement (array,itemToRemove){
    let indexInArr = array.indexOf(itemToRemove)
    if(indexInArr != -1){
        array.splice(indexInArr,1);
    }
    return array;
}
const resultRemoveElement = removeElement(arrayNum, 5);

// TASK 1-v2
function removeElementV2 (array,itemToRemove){
    let res = [];
    array.forEach(element => {
        if(element != itemToRemove){
            res.push(element);
        }
    });
    return res;
}
const resultRemoveElement_V2 = removeElementV2(arrayStr, 'Beijing');



// TASK 2
function removeElements(){ // arguments(array, 'itemToRemove-1', 'itemToRemove-2', 'itemToRemove-n')
    let arg = arguments;
    let arr = arg[0];

    for (let i = 1; i < arg.length; i++) {
        if(arg[i] && arr.indexOf(arg[i]) != -1){
            arr.splice(arr.indexOf(arg[i]),1);
        }
    }
    return arr;
}
const resultRemoveElements = removeElements(arrayStr, 'Lima',5,'Saratov');


// TASK 3
function unique(array){
    let result = [];

    array.forEach(function(item){
        if(!result.includes(item)){
            result.push(item);
        }
    });
    return result;
}

const resultUnique = unique([2, 1, 1, 3, 2]);
const resultUnique2 = unique(['top', 'bottom', 'top', 'left']);



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

    arrLong.forEach(function(item){
        if(!arrShort.includes(item)){
            result.push(item);
        }
    });

    return result;
}

const resultdifference = difference([7, -2, 10, 5, 0], [0, 10]);
const resultdifference1 = difference([0, 10, 55], [7, -2, 10, 5, 0, 3, 55]);
const resultdifference2 = difference(['Beijing', 'Kiev'], ['Kiev', 'London', 'Baghdad']);
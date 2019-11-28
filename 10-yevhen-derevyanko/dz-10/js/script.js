let arrayNum = [1, 2, 3, 4, 5, 6, 7];
let arrayStr = ['Kiev', 'Beijing', 'Lima', 'Saratov'];



// TASK 1
function removeElement (array,itemToRemove){
    if(array.indexOf(itemToRemove) != -1){
        array.splice(array.indexOf(itemToRemove),1);
    }
    return array;
}

//console.log(removeElement(arrayNum, 10));
//console.log(removeElement(arrayStr, 'Lima'));


// TASK 2
function removeElements(){
    let iterToRemove = 1;
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[iterToRemove] && arguments[0].indexOf(arguments[iterToRemove]) != -1){
            arguments[0].splice(arguments[0].indexOf(arguments[iterToRemove]),1);
        }
        iterToRemove++;
    }
    return arguments[0];
}
// removeElements(arrayStr, 'Kiev',5,'Saratov');
// console.log(arrayStr);




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




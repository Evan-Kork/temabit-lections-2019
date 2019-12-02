//-----1
function removeElement(arr, item){
    (arr.indexOf(item) == -1)? console.log('item not found'): arr.splice(arr.indexOf(item),1)
}

const arr1 = [1,2,3,4,5,6,7,8];
const arr2 = ['a','b','c','d','e','f'];

removeElement(arr1, 3);
console.log(arr1);
removeElement(arr1, 10);

removeElement(arr2, 'a');
console.log(arr2)

//-----2

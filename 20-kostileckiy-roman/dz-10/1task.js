// https://codesandbox.io/s/amazing-euclid-z04eh?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark

//task1
var myArrCountry = ['Ukraine','Belarus', 'Poland', 'Russia', 'Germany', 'France', 'Italy', 'Spain']
var myArrNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0]
function removeItem(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array.indexOf(item) !== -1) {
        array.splice(array.indexOf(item),1);
      }
    }
}
removeItem(myArrNum, 0);
removeItem(myArrCountry, 'Russia');
console.log(myArrNum);
console.log(myArrCountry);
//task2
function removeItems(array, ...items){
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(items) !== -1) {
          array.splice(array.indexOf(items),1);
        }
      }
    }
removeItems(myArrNum, 2,5,8,13);
removeItems(myArrCountry, 'France', 'Italy');
console.log(myArrNum);
console.log(myArrCountry);
//task3
function noDublicates(array) {
    let noDublicatesArray = array.slice();
    for (var i = 0; i < noDublicatesArray.length; i++) {
      while (true) {
        if (noDublicatesArray.indexOf(noDublicatesArray[i], i + 1) !== -1) {
         noDublicatesArray.splice(noDublicatesArray.indexOf(noDublicatesArray[i]),1);
          i--;
        } else {
          break;
        }
      }
    }
    return noDublicatesArray;
  }
  const randomArr = [2,2,3,32,2,3,3,4,4,52,2,3,3,4,4,5,4,4,5]
  var noDubArr = noDublicates(randomArr)
  console.log(noDubArr)
//task4
const array1 = [82, 92, 18, 13, 22,123,12,31,3222,1233,131,123,9877,76,14]
const array2 = [123,13,180,0,10,222,332,76,131,18]
const filteredArray = ArrFilter(array1, array2)
console.log(filteredArray)
function ArrFilter(arr1, arr2){
    return arr1.filter(function(item, i, arr){
        return false === arr2.includes(item, 0);
    });
}


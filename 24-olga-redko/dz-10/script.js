//task 1
function removeElement(array, item) {
  let index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

//task 2
function removeElements() {
  let arr = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    let index = arr.indexOf(arguments[i]);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }
  return arr;
}

//task 3
function unique(array) {
  let arr = [];
  for (let item of array) {
    if (!arr.includes(item)) {
      arr.push(item);
    }
  }
  return arr;
}

// task 4
function difference(array1, array2) {
  let arr = [];
  for (let item of array1) {
    if (!array2.includes(item)) {
    arr.push(item);
  }}
  return arr 
}

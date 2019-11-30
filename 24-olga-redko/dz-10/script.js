//task 1
function removeElement(array, item) {
  let index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

//task 2
function removeElements(array, ...items) {
  for (let i = 0; i < items.length; i++) {
    let index = array.indexOf(items[i]);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  return array;
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

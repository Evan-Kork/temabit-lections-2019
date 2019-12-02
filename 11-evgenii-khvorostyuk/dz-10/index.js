'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7];
const cities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

const removeElement = (array, item) => {
  if (array.length === 0) return;
  const itemIndex = array.indexOf(item);
  if (itemIndex !== -1) array.splice(itemIndex, 1);
  return array;
}

// console.log(numbers);
// removeElement(numbers, 5);
// console.log(numbers);

const removeElements = function () {
  let args = [].slice.call(arguments);
  let array = args.splice(0, 1)[0]
  if (!Array.isArray(array) || array.length === 0) return;
  if (args.length === 0) return;

  args.forEach(element => {
    const itemIndex = array.indexOf(element);
    if (itemIndex !== -1) array.splice(itemIndex, 1);
  });

  return array;
}

// console.log(numbers);
// removeElements();
// removeElements(numbers);
// removeElements(cities, 'Berlin', '2', 'Lima');
// removeElements(numbers, '1', 2, 5);
// console.log(cities);
// console.log(numbers);


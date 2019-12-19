'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7];
const cities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

const removeElement = (array, item) => {
  if (array.length === 0) return;
  const itemIndex = array.indexOf(item);
  if (itemIndex !== -1) array.splice(itemIndex, 1);
  return array;
};

const removeElements = function () {
  // let args = [].slice.call(arguments);
  let args = [ ...arguments ];
  let array = args.splice(0, 1)[0]
  if (!Array.isArray(array) || array.length === 0) return;
  if (args.length === 0) return;
  args.forEach(element => {
    const itemIndex = array.indexOf(element);
    if (itemIndex !== -1) array.splice(itemIndex, 1);
  });

  return array;
};

const unique = source => {
  let output = [];
  if (!Array.isArray(source) || source.length === 0) return output;
  source.forEach(item => {
    if (output.indexOf(item) === -1) output.push(item);
  });
  return output;
};

const difference = (source_1, source_2) => {
  let output = [];
  if (!Array.isArray(source_1) || source_1.length === 0 ||
    !Array.isArray(source_2) || source_2.length === 0) return output;
  let arrayToDiff = [ ...source_2 ];
  if (source_2.length > source_1.length) {
    arrayToDiff = [ ...source_1 ];
    source_1 = [ ...source_2 ];
  }
  output = source_1.filter(item => {
    return arrayToDiff.indexOf(item) === -1;
  });
  return output;
}

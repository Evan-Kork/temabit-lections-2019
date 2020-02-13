//Задание 1 - удалить 1 элемент массива
function removeElement(array, item){
  let index = array.indexOf(item);
  if (index != -1){
    array.splice(index,1);
  }
  return array;
}

const arr1 = [1, 2, 3, 4, 5, 2, 3, 4, 5, 9];
console.log('Массив до удаления: ', arr1);
//Вывод массива в консоль [1, 2, 3, 4, 5, 2, 3, 4, 5, 9]

removeElement(arr1, 9); // удалит 9 из массива
console.log('Массив после удаления элемента 9: ', arr1);
//Результат [1, 2, 3, 4, 5, 2, 3, 4, 5]

const arr2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
console.log('Массив до удаления: ', arr2);
//Вывод массива в консоль ['Kiev', 'Beijing', 'Lima', 'Saratov']

removeElement(arr2, 'Lima'); // удалит 'Lima' из массива
console.log('Массив после удаления элемента Lima: ', arr2);
// Результат: ['Kiev', 'Beijing', 'Saratov']

removeElement(arr2, 'Berlin'); // не удалит ничего
console.log('Массив после удаления элемента Berlin: ', arr2);
// Результат: ['Kiev', 'Beijing', 'Saratov']

//Задание 2 - удалить несколько элементов массива
function removeElements(array) {
  for (let i = 0; i < arguments.length; i++) {
    let indexEl = array.indexOf(arguments[i]);
    if (indexEl != -1) {
      array.splice(indexEl,1);
    }
  }
  return array;
}

const arr3 = [8, 2, 3, 4, 5, 2, 3, 4, 5, 9];
console.log('Массив до удаления: ', arr3);
//Вывод массива в консоль [8, 2, 3, 4, 5, 2, 3, 4, 5, 9]

removeElements(arr3, 9, 3, 2); // удалит 9, 3, 2
console.log('Массив после удаления элементов 9, 3, 2: ', arr3);
//Результат [8, 4, 5, 2, 3, 4, 5]

const arr4 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
console.log('Массив до удаления: ', arr4);
//Вывод массива в консоль ['Kiev', 'Beijing', 'Lima', 'Saratov']

removeElements(arr4, 'Lima', 'Berlin', 'Kiev');
// удалит 'Kiev' и 'Lima' из массива, а 'Berlin' там нету
console.log('Массив после удаления элементов Lima, Berlin, Kiev: ', arr4);
// Результат ['Beijing', 'Saratov']

//Задание 3 - вывести уникальные элементы массива
let unique = function(array){
  let tmp = {};
  return array.filter(function(a){
    return a in tmp ? 0 : tmp[a] = 1;
  });
};

const arr5 = [1, 2, 3, 4, 5, 2, 3, 4, 5, 9];
console.log('Массив: ', arr5);
//Вывод массива в консоль [1, 2, 3, 4, 5, 2, 3, 4, 5, 9]
console.log('Уникальные элементы в массиве: ', unique(arr5));
//Результат [1, 2, 3, 4, 5, 9]

const arr6 = ['top', 'bottom', 'top', 'left']
console.log('Массив: ', arr6);
//Вывод массива в консоль ['top', 'bottom', 'top', 'left']
console.log('Уникальные элементы в массиве: ', unique(arr6));
//Результат ['top', 'bottom', 'left']

//Задание 4 - возвращать новый массив со значениями, которые содержались в array1, но не содержались в array2.
function difference(array1, array2) {
  return array1.filter(function(item) {
    return !array2.includes(item);
  });
}

const arr7 = [1, 2, 3, 4, 5];
console.log('Массив 1: ', arr7);
//Вывод массива в консоль [1, 2, 3, 4, 5]
const arr8 = [6, 2, 8, 4, 5];
console.log('Массив 2: ', arr8);
//Вывод массива в консоль [6, 2, 8, 4, 5]
const arrDiff = difference(arr7, arr8);
//поиск значений, кот. есть в arr7, но нету в arr8
console.log('Массив 3: ', arrDiff);
//Результат [1, 3]

const arr9 = ['Beijing', 'Kiev'];
console.log('Массив 1: ', arr9);
//Вывод массива в консоль ['Beijing', 'Kiev']
const arr10 = ['Kiev', 'London', 'Baghdad'];
console.log('Массив 2: ', arr10);
//Вывод массива в консоль ['Kiev', 'London', 'Baghdad']
const arrDiff1 = difference(arr9, arr10);
//поиск значений, кот. есть в arr9, но нету в arr10
console.log('Массив 3: ', arrDiff1);
//Результат ['Beijing']

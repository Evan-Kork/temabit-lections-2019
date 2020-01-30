// Задача: Перетин множин
// Розробити функцію, що для вказаного набору аргументів-масивів обчислює масив, який складається із елементів перетину множин, утворених із аргументів.

// Приклад використання:

function intersection(...arrays) {

  let result = new Set();

  for (let item of arrays) {
    if (result.size <= 0) {  //заполняем пустой Set
      for (let x of item) {
        result.add(x);
      }
    } else {
      for (let value of result) {  //находим общие элементы
        let current = new Set(item);
        if (!current.has(value)) {
          result.delete(value);
        }
      }
    }
  }

  return Array.from(result);
}

console.log(intersection([1, 2, 2, 3, 4, 5], [2, 3, 3, 4, 5, 6]));
/// [2,3,4,5]


// Задача: Кешована функція
// Розробити оптимізований варіант функція для пошуку N-ого числа послідовності Фібоначі, яка використовує Map для кешування результатів

// Приклад використання:


function cached(f) {
  const cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = f(x);
    cache.set(x, result);

    return result;
  };
}

const fi = cached(function (n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fi(n - 2) + fi(n - 1);
  }
});

console.log(fi(50));
/// 12586269025

//-----------------------------------------------------------------------------------
// Задача: Генералізоване відображення
// Розробити функцію, аналогічну функції-генератору map із лекції, яка замість однієї послідовності приймає і обробляє N послідовностей:

// ((I_1, I_2, ... I_n), (J_1, J_2, ..., J_n), ...)
//     ==> (operator(I_1, J_1, ...), operator(I_2, J_2, ...), ... operator(I_n, J_n, ...))
// Приклад використання:

function* map(operator, ...iterables) {

  let tempSet = new Set();            //контейнер для итераторов

  for (let iterable of iterables) {   //заполняется контейнер итераторами
    let iterator = iterable[Symbol.iterator]();
    tempSet.add(iterator);
  }

  let y = true;                       //условие для завершения цикла while
  while (y) {
    let tempArr = [];

    for (let iterators of tempSet) {  //заполнение tempArr значениями
      let x = iterators.next();
      if (!x.done) {
        tempArr.push(x.value);
      } else {
        return;                       //закрытие генератора без неполного tempArr
      }
    }
    yield operator(...tempArr);
  }
}

const result = map(
  function (a, b, c) {
    return (a + b) * c;
  },
  [1, 2, 3, 4, 5, 6],
  [10, 20, 30, 40, 50, 7],
  [1, -1, 1, -2, 3],
);

console.log(Array.from(result));
// [11, -22, 33, -88, 165]

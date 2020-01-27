/*========================================================================
Розробити функцію, що для вказаного набору аргументів-масивів
обчислює масив, який складається із елементів перетину множин,
утворених із аргументів.
Приклад використання:

function intersection(...arrays) {
	/// @todo implement
}

console.log(intersection([1,2,2,3,4,5], [2,3,3,4,5,6]));
/// [2,3,4,5]
*/

// ВАРІАНТ 1
function *trackArray(array) {
	for (let item of array) yield item;
}

function intersection_1(...arrays) {

	let result_array = arrays.splice(0, 1)[0];

	for (let array of arrays) {

		let current_array = trackArray(result_array);
		let other_array = trackArray(array);
		result_array  = [];
		let read = true;
		let current, other;

		do {
				if (read) {
					current = current_array.next();
					other = other_array.next();
					read = false;
					continue;
				}

				if (other.value < current.value) {
					other = other_array.next();
				} else if (other.value > current.value) {
					current = current_array.next();
				} else {
					result_array.push(current.value);
					read = true;
				}

		} while (!(current.done || other.done));
	}
	return result_array;
}

console.log(intersection_1([1,2,2,3,4,5,5], [2,3,3,4,5,5,6]));

// ВАРІАНТ 2
function intersection_2(...arrays) {

	let result_array = arrays.splice(0, 1)[0];

	for (let array of arrays) {

		let current_array = result_array;
		let other_array = array;
		result_array  = [];
		let current_length = current_array.length;
		let other_length = other_array.length;
		let i = -1, j = -1; 

		while (++i < current_length && ++j < other_length) {
					
			current = current_array[i];
			other = other_array[j];

			if (other < current) {
				j = other_array.indexOf(current, ++j);
			} else if (other > current) {
				i = current_array.indexOf(other, ++i);
			}
				
			if (i == -1 || j == -1) break;
			result_array.push(current_array[i]);
		}
	}
	return result_array;
}

console.log(intersection_2([1,2,2,3,4,5,5], [2,3,3,4,5,5,6]));

/*========================================================================
Задача: Кешована функція
Розробити оптимізований варіант функція для пошуку N-ого числа послідовності Фібоначі,
яка використовує Map для кешування результатів

Приклад використання:

function cached(f) {
    /// @todo implement
}

const fi = cached(function (n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fi(n-2) + fi(n-1);
    }
});

console.log(fi(50))
/// 12586269025
*/

function cached(f) {
	let cache = new Map();
	
	function cached_f(...args) {
		let key = JSON.stringify(args);
		if (cache.has(key)) return cache.get(key);
		else {
			try {
			let result = f.apply(this, args);
			cache.set(key, result);
			return result;
			} catch(e) {
				throw e;
			}
		}
	}
	return cached_f;
}

function getFibNumber(n) {
	function fib(n) {
		if (n == 1) return [0, 1];
		let n_1 = fib(n - 1);
		return [n_1[1], n_1[0] + n_1[1]];
	}			
	
	if (Number.isInteger(n) && n > 0 ) return fib(n)[1];
	throw new Error("BAD ARGS!");
}

fi = cached(getFibNumber);

console.log("100-е число FI: " + fi(100));

/*========================================================================
Задача: Генералізоване відображення
Розробити функцію, аналогічну функції-генератору map із лекції,
яка замість однієї послідовності приймає і обробляє N послідовностей:

((I_1, I_2, ... I_n), (J_1, J_2, ..., J_n), ...)
	==> (operator(I_1, J_1, ...), operator(I_2, J_2, ...), ... operator(I_n, J_n, ...))
Приклад використання:

function* map(operator, ...iterables) {
	/// @todo implement
}

const result = map(
	function (a, b, c) {
		return (a + b) *c;
	},
	[1,   2,  3,  4,  5, 6],
	[10, 20, 30, 40, 50, 7],
	[1,  -1,  1, -2,  3]
);

console.log(Array.from(result));
// [11, -22, 33, -88, 165]
*/

function *map(operator, ...iterables) {
	
	let iterators = [];
	for (let iterable of iterables)
		iterators.push(iterable[Symbol.iterator]());

	while(true) {
		let cross_array = [];
		for (let iterator of iterators) {
			let obj = iterator.next();
			if (obj.done) return;
			cross_array.push(obj.value);
		}
		yield operator(...cross_array);
	}
}

const result = map(
	function (a, b, c) {
		return (a + b) *c;
	},
	[1,   2,  3,  4,  5, 6],
	[10, 20, 30, 40, 50, 7],
	[1,  -1,  1, -2,  3]
);

console.log(Array.from(result));

/*
    in the bash
git checkout feature/06-vasyl-savitskyy/dz-13
node 06-vasyl-savitskyy/dz-13/main.js
*/

/*
*   Задача: Перетин множин
* Розробити функцію, що для вказаного набору аргументів-масивів обчислює масив,
* який складається із елементів перетину множин, утворених із аргументів.
*/
function intersection(...arrays) {
    const res = new Set([]);
    if(arrays.length) {
        let has = 0;
        const values = new Set(arrays[0]);
        for(let val of values) {
            for(let arr of arrays) {
                if(new Set(arr).has(val)) {
                    has++;
                }
            }
            if(has === arrays.length) {
                res.add(val);
            }
            has = 0;
        }
    }
    return [...res];
}

console.log(intersection([1,2,2,3,4,5], [2,3,3,4,5,6], [2,6,9,3,5,4,8]));
/// [2,3,4,5]

console.log('------------------------------------------------------------------------------------------');
/*
*   Задача: Кешована функція
* Розробити оптимізований варіант функція для пошуку N-ого числа послідовності Фібоначі,
* яка використовує Map для кешування результатів.
*/
function logAndEval(code) {
    try {
        console.log('OK: %s ===> %o', code, eval(code));
    } catch (exception) {
        console.log('ERROR: %s ===> %s', code, exception.stack);
    }
}

function cached(f) {
    const map = new Map();
    return function(n) {
        const result = map.get(n);
        if(typeof result === 'function') {
            return result();
        } else {
            try {
                const res = f(n);
                map.set(n, () => res);
                return res;
            } catch(e) {
                map.set(n, () => {throw e;});
                throw e;
            }
        }
    };
}

const fi = cached(function (n) {
    if (typeof n !== 'number') throw new TypeError('argument isn\'t numeric');
    if (n < 0) throw new TypeError('argument is negative');
    if (!Number.isInteger(n)) throw new TypeError('argument isn\'t integer or finite');

    if (n === 0 || n === 1) {
        return n;
    } else {
        return fi(n-2) + fi(n-1);
    }
});

logAndEval('fi(50)');
/// 12586269025

function testfi(n) {
	try {
		console.log('fi(%o) = %o', n, fi(n));
	} catch (e) {
		console.log('fi(%o) throws %o', n, e);
	}
}

for (let n of [-1,-1,10,55,Infinity,Infinity,1.5,1.5]){
    testfi(n);
}

console.log('------------------------------------------------------------------------------------------');
/*
*   Задача: Генералізоване відображення
* Розробити функцію, аналогічну функції-генератору map із лекції,
* яка замість однієї послідовності приймає і обробляє N послідовностей:
*/
function* map(operator, ...iterables) {
    function getValues(iterables, i) {
        const a = [];
        for (let arr of iterables) {
           a.push(arr[i]);
        }
        return a;
    }

    const length = (function(iterables) {
        const a = [];
        for (const arr of iterables) {
            a.push(arr.length);
        }
        return Math.min(...a);
    })(iterables);
    
    for (let i=0; i < length; i++ ) {
        yield operator(...getValues(iterables, i));
    }
}

const result = map( function (a, b, c) {
                        return (a + b) *c;
                    },
                    [1,   2,  3,  4,  5, 6],
                    [10, 20, 30, 40, 50, 7],
                    [1,  -1,  1, -2,  3]

);

console.log(Array.from(result));
// [11, -22, 33, -88, 165]

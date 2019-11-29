/*
	* 1. Через діалог promt запросити число N. Якщо число N не більше нуля, то вивести alert - "Ви ввели невірне число, повторіть!".
		Після закриття цього alert - знову з'явиться перший діалог promt. Така послідовність діалогів буде до тих пір, поки будемо
		вводити число не більше нуля. Якщо ввели вірне число - вивести через alert суму (от 1 до N).

	* 2. Вивести табличку множення від 1 до 10 за допомогою циклу for та while(два варіанта). Таблицю оформити стилями.

	* 3. Використовуючи функції в JS, вивести послідовність чисел Фібоначчі, останє число не більше 100.
*/

/*========================= I ===============================*/

const dialogWindow = () => {
    const ZERO_POINT = 0;
    const val = +window.prompt(`Введіть число більше ${ZERO_POINT}:`);

    return () => {
        const f = val > ZERO_POINT ? true : false;

        if (f) {
            let sum = 0;
            for (let i = 0; i <= val; i++) {
                sum += i;
            }
            window.alert(`Сума цифр числа ${val} рівна ${sum}`);
        } else {
            window.alert(`Ви ввели не вірне число, меньше або рівне ${val}!`);
        }

        return f;
    }
}

let flag = dialogWindow()();

while (!flag) {
    flag = dialogWindow()();
}

/*========================= II ===============================*/
function tableFor() {
    const table_for = document.getElementById('table_for');
    const tbody1 = document.createElement("tbody");

    for (let i = 1; i <= 10; i++) {
        const tr = document.createElement("tr");
        for (let j = 1; j < 10; j++) {
            tr.innerHTML += `<td>${j} * ${i} = ${i * j}</td>`;
        }
        tbody1.appendChild(tr);
    }
    table_for.appendChild(tbody1);
}

function tableWhile() {
    const table_while = document.getElementById('table_while');
    const tbody2 = document.createElement("tbody");
    let i = 1;
    let j = 1;

    while (i <= 10) {
        const tr = document.createElement("tr");
        while (j < 10) {
            tr.innerHTML += `<td>${j} * ${i} = ${i * j}</td>`;
            j++;
        }
        tbody2.appendChild(tr);
        j = 1;
        i++;
    }
    table_while.appendChild(tbody2);
}

tableFor();
tableWhile();

/*========================= III ===============================*/
const HARD_STOP = 100;
const arrFibFromZeroToHardStopValue = (max) => {
    const array = [];
    let f = 0;
    let a = 1;

    while (f < max) {
        array.push(f);
        f = [a, a = f][0];
        f += a;
    }

    return array;
}

document.getElementById("HARD_STOP").innerHTML = HARD_STOP;
document.getElementById("fib").innerHTML = JSON.stringify(arrFibFromZeroToHardStopValue(HARD_STOP));

/*
1. Через діалог promt запросити число N. Якщо число N не більше нуля, то вивести alert -
"Ви ввели невірне число, повторіть!". Після закриття цього alert - знову з'явиться перший діалог promt.
Така послідовність діалогів буде до тих пір, поки будемо вводити число не більше нуля.
Якщо ввели вірне число - вивести через alert суму (от 1 до N).

2. Вивести табличку множення від 1 до 10 за допомогою циклу for та while(два варіанта).
Таблицю оформити стилями.

3. Використовуючи функції в JS, вивести послідовність чисел Фібоначчі, останє число не більше 100.
*/


let app = document.querySelector('.app');
// ========================= сума чисел ===============================
let sum = 0;
let count = +prompt('введіть число більше 0');
if (count <= 0 || isNaN(count)) {
	do {
		alert('введіть число більше 0');
		count = +prompt('введіть число більше 0');
		if (count>=0 && !isNaN(count)){
		
		}
	} while (count <= 0 || isNaN(count))
}
else {
	for (let i = 1; i <= count; i++) {
		sum += i;
	}
	alert(`Сума = ${sum}`);
}


// ========================= числа Фібоначчі ===============================
const fib = (max) => {
	const result = [0, 1];
	let val;
	for (let i = 1; ; i++) {
		val = result[i] + result[i - 1];
		if (val <= max)
			result.push(val);
		else break;
	}
	return result;
};
console.log(fib(100));

// ========================= табличка множення for ===============================
for (let i = 1; i < 10; i++) {
	let table = document.createElement("table");
	table.setAttribute('border', '1px solid');
	for (let j = 1; j < 10; j++) {
		table.innerHTML += `<tr>
										<td>${i}</td>
										<td> * </td>
										<td>${j}</td>
										<td> = </td>
										<td>${i * j}</td>
									</tr> `;
	}
	app.appendChild(table);
}

// ========================= табличка множення while ===============================
let app2 = document.querySelector('.app2');
let i = 1;
let k = 1;
while (i < 10) {
	let table2 = document.createElement("table");
	table2.setAttribute('border', '1px solid');
	while (k < 10) {
		table2.innerHTML += `<tr>
										<td>${i}</td>
										<td> * </td>
										<td>${k}</td>
										<td> = </td>
										<td>${i * k}</td>
									</tr>`;
		k++;
	}
	app2.appendChild(table2);
	k = 1;
	i++;
}


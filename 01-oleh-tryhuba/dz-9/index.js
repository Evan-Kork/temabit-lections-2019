let app = document.querySelector('.app');
// ========================= сума чисел ===============================
let sum = 0;
let count = +prompt('введіть число більше 0');
do {
	if (count <= 0) {
		count = +prompt('введіть число більше 0');
	}
	for (let i = 1; i <= count; i++) {
		sum += i;
	}
} while (count <= 0);
alert(`Сума = ${sum}`);
// ========================= числа Фібоначчі ===============================
let num = +prompt('введіть число Фібоначчі');
const fib = num => {
	if (num <= 1) {
		return num;
	}
	else {
		return fib(num - 1) + fib(num - 2);
	}
};
alert(fib(num));
// ========================= табличка множення ===============================
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

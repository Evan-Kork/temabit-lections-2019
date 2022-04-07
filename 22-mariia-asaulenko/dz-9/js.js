
// Дз-1. через промпт запросить число Н. Вывести через алерт сумму (от 1 до  Н). Если число Н отрицательное, алерт  "вы ввели неверно, повторите".
// Сделать через while.

let n;
let summ = 0;
while (!n || n <= 0) {
     n = Number(prompt('Введите число', 'на этом месте должно быть число'));
};
for (let i = 1; i <= n; i++) {
    summ = summ + i;
};
alert(`сумма от 1 до ${n} равна ${summ}`);

// дз2 вывести табличку умножения через фор и вайл(2 варианта). Оформить в ввиде таблицы с границами
document.write("<style> div{display:flex; justify-content:space-evenly } table, tr, td {border: 1px solid black}</style>");
document.write("<div> <table>");

for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        let mult = i * j;
        document.write("<tr><td>" + i + "</td><td>" + '*' + "</td><td>" + j + "</td><td>" + "=" + "</td><td>" + mult + "</td><tr>")
    }
};
document.write("</table>");
document.write("<table>");
i = 1;
while (i < 11) {
    j = 1;
    while (j < 11) {
        console.log('j')
        let mult = i * j;
        document.write("<tr><td>" + i + "</td><td>" + '*' + "</td><td>" + j + "</td><td>" + "=" + "</td><td>" + mult + "</td><tr>")
        j++;
    }
    i++;
};
document.write("</table></div>");
// дз3 (используя функцию)  вывести числа фибоначи, до 100 через рекурсию

let numFib = [0, 1];

function fibonachi(num) {
    if (num == 0) {
        return numFib[0];
    };
    if (num == 1) {
        return numFib[1];
    };
    if (!numFib[num]) {
        numFib[num] = fibonachi(num - 2) + fibonachi(num - 1);
    };
    return numFib[num];
}

fibonachi(100);
document.write("<h2>числа Фибоначчи до 100</h2>");
for (i = 0; i < numFib.length; i++) {
    document.write("<span>" + numFib[i] + "&nbsp</span>");
}

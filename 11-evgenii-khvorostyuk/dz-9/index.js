'use strict';

const promptPositiveNumber = () => {
  let num = 0;
  do {
    num = prompt('Please, enter positive number: ');
    if (num === null || num === '') break;
    num = parseInt(num);
    let num2 = 0;

    while (num2 < num) {
      console.log(num2);
      num2++;
    }
  }
  while (num <= 0 || isNaN(num))
}

const table = () => { 
  if (document.querySelector('#multiplication_table tbody') === null) return
  let draw = ''
  for (let n = 1; n <= 10; n++) {
    draw += `<td><table><tbody>`
    for (let i = 1; i <= 10; i++) {
      draw += `<tr><td>${n}x${i} = ${n*i}</td></tr>`
    }
    draw += `</tbody></table></td>`
    let tr = document.querySelector(`#multiplication_table tbody #${n <= 5 ? 'top' : 'bottom'}`)
    tr.innerHTML = draw
    if (n === 5) draw = ''
  }
}

table()

// const tableWhile = () => { 
//   if (document.querySelector('#multiplication_table tbody') === null) return;
//   let draw = '';
//   let n = 1;
//   while (n <= 10) {
//     draw += `<td><table><tbody>`;
//     let i = 1;
//     while (i <= 10) {
//       draw += `<tr><td>${n}x${i} = ${n*i}</td></tr>`;
//       i++;
//     }
//     draw += `</tbody></table></td>`;
//     let tr = document.querySelector(`#multiplication_table tbody #${n <= 5 ? 'top' : 'bottom'}`);
//     tr.innerHTML = draw;
//     if (n === 5) draw = '';
//     n++;
//   }
// }

// tableWhile()

function fib(n) {
  if (n <= 1) return n;
  else return fib(n - 1) + fib(n - 2);
}

function showFibSequence(n) {
  let sequence = []
  for (let i = 0; i <= n; i++) {
    sequence.push(fib(i))
  }
  console.log('fib -> ', sequence.toString());
  return sequence.toString();
}

showFibSequence(11);

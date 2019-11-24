//Таблиця множення (for)
let boxFor = document.querySelector('.multiplication-table-cycle-for');
if(boxFor){
  let outFor = '<table><tr>';
  for (let iter = 1; iter <= 10; iter++) {
    outFor += '<td><table>';
    for (let iterSec = 1; iterSec <= 10; iterSec++) {
      outFor += '<tr><td>'+iter+'</td><td>*</td><td>'+iterSec+'</td><td>=</td><td>'+iter*iterSec+'</td></tr>';
    }
    outFor += '</table></td>';
    (iter == 5) ? outFor += '</tr><tr>' : '';
  }
  outFor += '</tr></table>';

  boxFor.insertAdjacentHTML("beforeEnd", outFor);
}




//Таблиця множення (while)
let boxWhile = document.querySelector('.multiplication-table-cycle-while');
if(boxWhile){
  let i = 1;
  let a = 1;
  let outWhile = '<table><tr>';
  while (i <= 10) {
    outWhile += '<td><table>';
    while(a <= 10){
      outWhile += '<tr><td>'+i+'</td><td>*</td><td>'+a+'</td><td>=</td><td>'+i*a+'</td></tr>';
      a++;
      if(a == 11){
        a = 1;
        break;
      }
    }
    outWhile += '</table></td>';
    (i == 5) ? outWhile += '</tr><tr>' : '';
    i++;
  }
  outWhile += '</tr></table>';

  boxWhile.insertAdjacentHTML("beforeEnd", outWhile);
}



//Чи́сла Фібона́ччі
let boxFibonacciNumbers = document.querySelector('.fibonacci-numbers');
if(boxFibonacciNumbers){
  boxFibonacciNumbers.insertAdjacentHTML("beforeEnd", getFibonacciNumbers(100));
}

function getFibonacciNumbers(item){
  let NumbFib = [];
  for (let iFib = 0; iFib <= item; iFib++) {
    if(NumbFib.length == 0 || NumbFib.length == 1){
      NumbFib.push(iFib);
    }else{
      NumbFib.push(NumbFib[iFib-1] + NumbFib[iFib-2]);
    }
  }
  return NumbFib.join(', ');
}



//Чи́сла Фібона́ччі №2 (рукурсія bad practice)
// let boxFibonacciNumbers = document.querySelector('.fibonacci-numbers');
// if(boxFibonacciNumbers){

//   let NumbFib = [];
//   for (let iFib = 0; iFib < 10; iFib++) {
//     NumbFib.push(getFibonacciNumbers(iFib));
//   }

//   boxFibonacciNumbers.insertAdjacentHTML("beforeEnd", NumbFib.join(', '));
//   function getFibonacciNumbers(item){
//     if(item == 0 || item == 1){
//       return item;
//     }else{
//       return getFibonacciNumbers(item - 1) + getFibonacciNumbers(item - 2);
//     }
//   }
// }
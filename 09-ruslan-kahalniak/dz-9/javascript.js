do {
  var integer = prompt("Введіть число більше 0")
  if (integer<=0)
    alert("Ви ввели невірне число")
} while (integer<=0);

var summary=0;
for(var i=0;i<=integer;i++){
  summary+=i;
}
alert(summary)


function showMultiplicationTableUsingForLoop(){
  document.write('<table border=1>')
  for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
      document.write(`<tr><td>${i}</td><td>*</td><td>${j}</td><td>=</td><td>${i*j}</td></tr>`);
    }
  }
  document.write('</table>');
}

function showMultiplicationTableUsingWhileLoop(){
  document.write('<table border=1>')
  let i=1
  let j=1
  while(i<=10){
    while (j<10) {
      document.write(`<tr><td>${i}</td><td>*</td><td>${j}</td><td>=</td><td>${i*j}</td></tr>`);
      j++
    }
    i++
    j=1
  }
  document.write('</table>');
}

//showMultiplicationTableUsingForLoop();
showMultiplicationTableUsingWhileLoop();

function fibNumber(n) {
  if (n <= 1) return n;
  else return fibNumber(n - 1) + fibNumber(n - 2);
}

let number=prompt("Скільки чисел Фібоначчі вивести?")
for(let i=0;i<=number;i++){
  document.write(fibNumber(i)+'<br>')
}

// Сума чисел
let sumNumbers = () => {
  let n = Number(prompt('Введіть число N:'));
  let result = 0;

  while(isNaN(n) || n < 1){
    alert('Ви ввели невірне число, повторіть!');
    n = Number(prompt('Введіть число N:'));

    if(!isNaN(n) && n > 0){
      break;
    } 
  }

  for (let b = 0; b <= n; b++) {
    result += b;
  }

  alert(result);
}

// Табличка множення з for
let multiplyWithForLoop = () =>{
  let forTable = document.getElementById("forTable");
  let x, y, forTableRow;

  for (x = 1; x <= 10; x++) {
    forTableRow = forTable.insertRow();
      for (y = 2; y <= 10; y++) {
        forTableRow.insertCell().innerHTML = x;
        forTableRow.insertCell().innerHTML = 'x';
        forTableRow.insertCell().innerHTML = y;
        forTableRow.insertCell().innerHTML = '=';
        forTableRow.insertCell().innerHTML = x * y;
      }
  }
}

// Табличка множення з while
let multiplyWithWhileLoop = () => {
    let x = 1,y = 2, whileTableRow;
    let whileTable = document.getElementById("whileTable"); 

    while(x <= 10) {
      whileTableRow = whileTable.insertRow();
      while(y <= 10) {
          whileTableRow.insertCell().innerHTML = x;
          whileTableRow.insertCell().innerHTML = 'x';
          whileTableRow.insertCell().innerHTML = y;
          whileTableRow.insertCell().innerHTML = '=';
          whileTableRow.insertCell().innerHTML = x * y;
          y++;
        }
      y = 2;
      x++;
    }
}

// Числа Фібоначі до 100
let fibonacciSequence = () => {
  let a = 1, b = 0, temp;
  let fibonacciContainer = document.getElementById("fibonacciContainer");
  

  while (true){
    temp = a;
    a = a + b;
    b = temp;

    if(b >= 100) break;

    fibonacciContainer.innerHTML += `<h2>${b},</h2>`;
  }

  return(b);
}

sumNumbers();
multiplyWithForLoop();
multiplyWithWhileLoop();
fibonacciSequence();
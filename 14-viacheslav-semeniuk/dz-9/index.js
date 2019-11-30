// Сума чисел
let sumNumbers = () => {
  let n = Number(prompt('Введіть число N:'));
  let result = 0;

  while(isNaN(n) || n <= 0){
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
    for (y = 1; y <= 5; y++) {
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
}

// Табличка множення з while
let multiplyWithWhileLoop = () => {
    let i = 0,j = 0, whileTableRow;
    let whileTable = document.getElementById("whileTable"); 

    while(i <= 10){
      whileTableRow = whileTable.insertRow();
      while(j <= 10){
        if (i == 0 && j == 0) {
          whileTableRow.insertCell().innerHTML = "X";
        } else if (i == 0 && j > 0) {
          whileTableRow.insertCell().innerHTML = j;
        } else if (j == 0 && i > 0) {
          whileTableRow.insertCell().innerHTML = i;
        } else {
         whileTableRow.insertCell().innerHTML = i * j;
        }
        j++;
      }
      j = 0;
      i++;
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

// sumNumbers();
multiplyWithForLoop();
// multiplyWithWhileLoop();
fibonacciSequence();
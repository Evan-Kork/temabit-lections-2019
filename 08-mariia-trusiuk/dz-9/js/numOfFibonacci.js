let numFib = document.querySelector('.numbers-of-Fibonacci');

function numbersOfFibonacci(n){
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i ++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    return fibonacci.join(', ')
}

if(numFib){
    numFib.insertAdjacentHTML("beforeEnd", numbersOfFibonacci(100));
}

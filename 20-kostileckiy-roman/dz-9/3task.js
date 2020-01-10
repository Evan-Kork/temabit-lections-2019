var FibNum = [0, 1];
function fib(num) {
    if (num == 0) {
        return FibNum[0];
    } else if (num == 1) {
        return FibNum[1];
    } else if (!FibNum[num]) {
        FibNum[num] = fib(num - 2) + fib(num - 1);
    };
    return FibNum[num];
}
fib(100);
for (i = 0; i < FibNum.length; i++) {
    document.write(FibNum[i] + "</br>");
}

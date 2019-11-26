var FibNum = [0, 1];
function fibonachi(num) {
    if (num == 0) {
        return FibNum[0];
    } else if (num == 1) {
        return FibNum[1];
    } else if (!FibNum[num]) {
        FibNum[num] = fibonachi(num - 2) + fibonachi(num - 1);
    };
    return FibNum[num];
}
fibonachi(100);
for (i = 0; i < FibNum.length; i++) {
    document.write(FibNum[i] + "</br>");
}

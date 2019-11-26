var number = prompt("Enter the number")
function summTo(n){
    var Summ = 0;
    for(var i = 0; i <= n; i++){
        Summ += i;
    }
    return Summ
}
alert(summTo(number))



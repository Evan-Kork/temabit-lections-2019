while(true) {
    let num = prompt("введіть ціле число яке більше 0", 1);
    if(num === null) break;
    if(num <=0 || isNaN(parseInt(num))){
        alert('ви ввели невірно, повторіть')
        continue
    }
    alert(+num * (+num + 1) / 2);
}
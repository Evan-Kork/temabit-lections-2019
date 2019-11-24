function checkNumber(){
    let number = +prompt('Число', 1);
    let out = 0;
    if(Number.isInteger(number) && number > 0){        
        for (let i = 1; i <= number; i++) {
            out += i;
        }
        // console.log(out);
        alert(out);
    }else{
        checkNumber();
    }
}
checkNumber();
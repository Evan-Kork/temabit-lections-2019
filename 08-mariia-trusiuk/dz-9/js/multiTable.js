let tableFor = document.querySelector('.cycle-for')
if(tableFor){
    let table = '<table><tr>';
    for (let i = 1; i <= 10; i++) {
        table += '<td><table>';
        for (let j = 1; j <= 10; j++) {
            table += '<tr><td>'+i+'</td><td>*</td><td>'+j+'</td><td>=</td><td>'+i*j+'</td></tr>';
        }
        table += '</table></td>';
    }
    table += '</tr></table>';
    tableFor.insertAdjacentHTML("beforeEnd", table);
}

let tableWhile = document.querySelector('.cycle-while')
if(tableWhile){
    let i = 1;
    let j = 1;
    let table = '<table><tr>';
    while(i <= 10){
        table += '<td><table>';
        while(j <= 10){
            table += '<tr><td>'+i+'</td><td>*</td><td>'+j+'</td><td>=</td><td>'+i*j+'</td><tr>';
            j++;
            if(j==11){
                j=1;
                break
            }
        }
        table += '</table></td>';
        i++
    }
    table += '</tr></table>';
    tableWhile.insertAdjacentHTML("beforeEnd", table);
}
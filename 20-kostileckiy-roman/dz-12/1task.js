var arrOne = [1,2,3,4,5,6,7,8];
var arrTwo = [2,3,4,6,8,9,6,6];
var arrThre = []

function intersection(...args){
    let sortArr = []
    for(let i = 0; i < args.length; i++){
        sortArr[i] = args[i]
    }
    for(let j = 0; j < sortArr[0].length; j++){
        let cache = sortArr[0][j]
        if(sortArr[1].includes(cache) === true ){
            arrThre[j] = cache
        }
    }
    arrThre = arrThre.filter(Element => Element !== null)
    console.log(arrThre);
}
function fib(n) {
    const mapFib = new Map()
    let fibArr = [0,1]
    if( n >= 1){
        for(let i =0; i != n; i++){
            fibArr.push(fibArr[i]+fibArr[i+1]) 
            mapFib.set(i, (fibArr[i] + fibArr[i+1]))
        }
        return mapFib
    }else{
        return n
    }
  }
intersection(arrOne,arrTwo);
console.log(fib(12))
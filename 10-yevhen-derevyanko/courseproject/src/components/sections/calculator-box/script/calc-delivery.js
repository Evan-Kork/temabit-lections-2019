const calculateDelivery = (dataCalc) => {
    let n = dataCalc.weight;
    let m = dataCalc.length;
    let g = dataCalc.firstCity;
    let h = dataCalc.secondCity;
    let price;
    let priceSame;
    let price1Same;

    if (g === h) {
        priceSame = ['','25', '30', '35', '38', '49', '65', '90'];
        price1Same = [{}, {len:"40", pr:"30"},{len:"60", pr:"38"}, {len:"90", pr:"65"}];
    }else{
        priceSame = ['','33', '37', '42', '47', '57', '75', '95'];
        price1Same = [{}, {len:"40", pr:"37"},{len:"60", pr:"47"}, {len:"90", pr:"75"}];
    }

    if ((n >=1 && n < 4) && (m === 1)){
        for (let i=1; i<priceSame.length;i++) {
            if (i===n) price = priceSame[i]; 
        }
    }
    if ((n >=4 && n < 6) && (m === 2)) {
        for (let i=1; i<priceSame.length;i++) {
            if (i===n) price = priceSame[i];
        }
    }
    if ((n >=6 && n < 8) && (m === 3)) {
        for (let i=1; i<priceSame.length;i++) {
            if (i===n) price = priceSame[i];
        }
    }
    if ((n >=1 && n < 4) && (m !== 1)) {
        for (let i=1; i<priceSame.length;i++) {
            if (i===m) price = price1Same[i].pr;
        }
    }
    
    if ((n >=4 && n < 6) && (m === 1)) {
        for (let i=1; i<priceSame.length;i++) {
            if (i===n) price = priceSame[i];
        }
    }
    if ((n >=4 && n < 6) && (m === 3)) {
        for (let i=1; i<priceSame.length;i++) {
            if (i===m) price = price1Same[i].pr;
        }
    }
    if ((n >=6 && n < 8) && ((m === 2) || (m === 1))) {
        for (let i=1; i<priceSame.length;i++) {
            if (i===n) price = priceSame[i];
        }
    }

    return price;
}
export default calculateDelivery;
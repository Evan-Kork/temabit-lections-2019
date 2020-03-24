export function combiteParametersThroughComma() {
    let countEmpties = 0;
    const res = [];
    for (let i = 0; i < arguments.length; i++) {
        if (!arguments[i].length) {
            countEmpties += 1;
        } else {
            res.push(arguments[i]);
        }
    }
    if (arguments.length === countEmpties) return '';
    
    return `/${res.join()}`;
}

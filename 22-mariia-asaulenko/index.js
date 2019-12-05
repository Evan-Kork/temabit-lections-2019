// task 1
{
    function removeElement(array, el) {
        let indexItem = array.indexOf(el);
        if (indexItem !== -1) {
            array.splice(indexItem, 1);
        }
    }
    const array = [1, 2, 3, 4, 5, 6, 7];
    removeElement(array, 5);
    console.log(array);
}

// task 2

{
    function removeElements (array, ...elements) {
        elements.forEach ((item) => {
            removeElement (array, item);
        })
    }
    const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
    removeElements(array, 'Lima', 'Berlin', 'Kiev');
    console.log(array);
}

// task 3
{
    function unique1(array) {
        let uniqueArrey=[];
        array.forEach((item, i, array) => {
            if (!uniqueArrey.includes(item)) {
                uniqueArrey.push(item);
            }
        })
        return uniqueArrey;
    }
    const result1 = unique1([2, 1, 1, 3, 2]);
    console.log(result1);
}
// or
{
    function unique2(array) {
        return array.reduce((uniqueArrey, item) => {
            if (!uniqueArrey.includes(item)) {
                 uniqueArrey.push(item);
            }
            return uniqueArrey;
        }, []);
    }
    const result2 = unique2(['top', 'bottom', 'top', 'left']);
    console.log(result2);
}


// task 4
{
    function difference(array1, array2) {
        return array1.filter((element) => !array2.includes(element))
    }
    const array1 = [7, -2, 10, 5, 0];
    const array2 = [0, 10];
    const result = difference(array1, array2);
    console.log(result);
}

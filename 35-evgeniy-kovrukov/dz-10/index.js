//-----------------------task1
function removeElement(array, item){
	var itemIndex = array.indexOf(item);
	if (itemIndex !== -1){		
		array.splice(itemIndex, 1);		
	} else {
		console.log("Logged output: removeElement -> element", item, "dose not exist in ",array);
	}
}
const array = [1, 2, 3, 4, 5, 6, 7];
console.log("Task1: array", array)
removeElement(array, 5);
console.log("Logged output: array", array)

const city = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
console.log("Logged output: array", city)

removeElement(city, 'Berlin');
removeElement(city, 'Lima');

//-----------------------task2
function removeEach(array, ...item){
    item.forEach(element => { 
        rez = removeElement(array, element);
    });
    return rez;
}

const numbers = [1,2,3,4,5];
console.log("Task2: numbers", numbers)
removeEach(numbers, 5,3,4);
console.log("Logged output: numbers", numbers)

const words = ['one', 'two', 'three', 'four']
console.log("Task2: words", words)
removeEach(words, 'two', 'four',)
console.log("Logged output: words", words)

//-----------------------task3
function unique(array){
	return array.filter(function(item, index) {
	 	return array.indexOf(item) === index;
	})
}
const notUnique = [1,2,1,3,1,2,3,1,3,4,5,3,3,6]
console.log("Task3: notUnique", notUnique)
const rezult = unique(notUnique);
console.log("Logged output: rezult", rezult);

//-----------------------task4

function difference(array1, array2){
	return array1.filter(function(item){
		return false === array2.includes(item, 0);
	})
}
const array1 = [7, -2, 10, 5, 0];
console.log("Task4: array1", array1)
const array2 = [0, 10];
console.log("Task4: array2", array2)

const diff = difference(array1, array2);
console.log("Logged output: rezult", diff);


//-----------------------task5
function missing(array1, array2){
	return array1.filter(function(item){
		return true !== array2.includes(item, 0);
	})
}
const array1m = [55, 44, 22, -10];
console.log("Task5: array1m", array1m)
const array2m = [44, 55, -10];
console.log("Task5: array2m", array2m)
const miss = missing(array1m, array2m);
console.log("Logged output: miss", miss)

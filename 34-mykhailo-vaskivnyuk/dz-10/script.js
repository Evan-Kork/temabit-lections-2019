//	https://codesandbox.io/s/dz-10-tii3m

'use strict'

function removeValue(array, value) {
	array.reduceRight(
		(prev, item, index) => array.splice( index, item === value ),
		0
	);
}

// function removeValues(array, ...values) {
// 	values.forEach( value => removeValue(array, value) );
// }

function removeValues(array) {
	let values = [].slice.call(arguments, 1);
	values.forEach( value => removeValue(array, value) );
}

function unique(array) {
	return array.filter( (value, index) => ! array.includes( value, index + 1 ) );
}

function difference(array1, array2){
	return array1.filter( value => ! array2.includes( value ) );
};

//-----------------------------------------------------------------------------
let test_array = ["first", "second", "second", "third", "first"];
console.log('array: ' + test_array);
let array = [];
let result = [];

//-- TASK 1 -------------------------------------------------------------------
array = test_array.slice();
removeValue(array, "first");
console.log('task 1 removeValueAll(array, "first"): ' + array);

//-- TASK 2 -------------------------------------------------------------------
array = test_array.slice();
removeValues(array, "first", "third", "forth");
console.log('task 2 removeValues(array, "first", "third", "forth"): ' + array);

//-- TASK 3 -------------------------------------------------------------------
array = test_array.slice();
result = unique(array);
console.log("task 3 unique(array): " + result);

//-- TASK 4 -------------------------------------------------------------------
array = test_array.slice();
result = difference(array, ["second", "forth"]);
console.log('task 4 difference(array, ["second", "forth"]): ' + result);

//-----------------------------------------------------------------------------
alert("done");
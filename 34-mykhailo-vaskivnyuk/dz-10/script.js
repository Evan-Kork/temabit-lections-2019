//	https://codesandbox.io/s/dz-10-tii3m

'use strict'

function removeValueOne(array, value, offset = -1) {
	offset = array.lastIndexOf( value, offset );
	array.splice( offset == -1 ? Infinity : offset, 1);
	return offset;
}

function removeValueAll(array, value) {
	let offset = 0;
	while ( offset = removeValueOne(array, value, offset - 1) > 0 );
}

function removeValues(array, ...values) {
	values.forEach( value => removeValueAll(array, value) ); 
}

function unique(array) {
	let result = array.slice();
	let i = result.length - 1;
	while  ( i > 0 ) removeValueOne(result, result[i], --i);
	return result;
}

function difference(array1, array2){
	return array1.filter( value => !array2.includes(value) );
};

//------------------------------------------------------------------------------
let test_array = ["first", "second", "second", "third", "first"];
console.log('array: ' + test_array);
let array = [];

//-- TASK 1.1 -----------------------------------------------------------------
array = test_array.slice();
removeValueOne(array, "first");
console.log('task 1.1 removeValueOne(array, "first"): ' + array);

//-- TASK 1.2 -----------------------------------------------------------------
array = test_array.slice();
removeValueAll(array, "first");
console.log('task 1.2 removeValueAll(array, "first"): ' + array);

//-- TASK 2 -------------------------------------------------------------------
array = test_array.slice();
removeValues(array, "first", "third", "forth");
console.log('task 2 removeValues(array, "first", "third", "forth"): ' + array);

//-- TASK 3 -----------------------------------------------------------------
array = test_array.slice();
let result = unique(array);
console.log("task 3 unique(array): " + result);

//-- TASK 4 -----------------------------------------------------------------
array = test_array.slice();
let array2 = ["second", "forth"]
result = difference(array, array2);
console.log('task 4 difference(array, ["second", "forth"]): ' + result);

//-----------------------------------------------------------------
alert("done");
const TITLE_ORIGIN = '&#160;&#160;&#160;&#160;origin:&#160;&#160;[';
const TITLE_CHANGED = 'changed:&#160;&#160;[';

/*removeElement*/
function removeElement(array, item){
	let i = null;
	while((i = array.indexOf(item)) !== -1) 
		array.splice(i, 1);

	return array;
}

document.write('removeElement<br />');
const array1 = [1, 2, 3, 4, 5, 6, 7];
document.write(`${TITLE_ORIGIN}${array1}] <br />`);
removeElement(array1, 5);
document.write(`${TITLE_CHANGED}${array1}] <br />`);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
document.write(`${TITLE_ORIGIN}${array2}] <br />`);
removeElement(array2, 'Lima');
removeElement(array2, 'Berlin');
document.write(`${TITLE_CHANGED}${array2}] <hr />`);

/*removeElements*/
function removeElements(){
	let length = arguments.length;
	for(let i = 1; i < length; i++) {
		removeElement(arguments[0], arguments[i]);
	}
}

document.write('removeElements<br />');
const array3 = [1, 2, 3, 4, 5, 6, 7];
document.write(`${TITLE_ORIGIN}${array3}] <br />`);
removeElements(array3, 5, 1, 6);
document.write(`${TITLE_CHANGED}${array3}] <br />`);

const array4 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
document.write(`${TITLE_ORIGIN}${array4}] <br />`);
removeElements(array4, 'Lima', 'Berlin', 'Kiev');
document.write(`${TITLE_CHANGED}${array4}] <hr />`);

/*unique*/
function unique(array){
	const arr = [];
	for(let i = 0; i < array.length; i++) {
		if(arr.indexOf(array[i]) === -1) {
			arr.push(array[i]);
		}
	}

	return arr;
}

document.write('unique<br />');
const array5 = [2, 1, 1, 3, 2];
document.write(`${TITLE_ORIGIN}${array5}] <br />`);
document.write(`${TITLE_CHANGED}${unique(array5)})] <br />`);

const array6 = ['top', 'bottom', 'top', 'left'];
document.write(`${TITLE_ORIGIN}${array6}] <br />`);
document.write(`${TITLE_CHANGED}${unique(array6)}] <hr />`);

/*difference*/
function difference(array1, array2) {
	return array1.filter(function (item) {
		return array2.indexOf(item) === -1;
	});
}

document.write('difference<br />');
const array7 = [7, -2, 10, 5, 0];
const array8 = [0, 10];
document.write(`${TITLE_ORIGIN}${array7}] <br />`);
document.write(`${TITLE_ORIGIN}${array8}] <br />`);
document.write(`${TITLE_CHANGED}${difference(array7, array8)}] <br />`);

const array9 = ['Beijing', 'Kiev'];
const array10 = ['Kiev', 'London', 'Baghdad'];
document.write(`${TITLE_ORIGIN}${array9}] <br />`);
document.write(`${TITLE_ORIGIN}${array10}] <br />`);
document.write(`${TITLE_CHANGED}${difference(array9, array10)}] <hr />`);

/*missing*/
function missing(array1, array2) {
	return array1.filter(function (item) {
		return array2.indexOf(item) === -1;
	});
}

document.write('missing<br />');
const array11 = [55, 44, 22, -10];
const array12 = [44, 55, -10];
document.write(`${TITLE_ORIGIN}${array11}] <br />`);
document.write(`${TITLE_ORIGIN}${array12}] <br />`);
document.write(`${TITLE_CHANGED}${missing(array11, array12)}] <br />`);
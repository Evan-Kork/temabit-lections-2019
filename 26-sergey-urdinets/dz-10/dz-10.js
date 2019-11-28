//https://codesandbox.io/s/winter-flower-o18vh?fontsize=14&hidenavigation=1&theme=dark

//TASK 1
{
	function removeElement(array, value) {
		for (let i = 0; i < array.length; i++) {
			let x = array.indexOf(value);
			if (x !== -1) {
				array.splice(x, 1);
				i--;
			} else {
				break;
			}
		}
	}

	{
	const array = [1, 2, 3, 4, 5, 5, 6, 7];
	removeElement(array, 5);
	console.log(array);
	}

	{
	const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
	removeElement(array, 'Lima'); 
	removeElement(array, 'Berlin'); 
	console.log(array);
	}
}

//TASK 2
{
	function removeElements(array, ...values) {
		for (var i = 0; i < values.length; i++) {
			while (true) {
				let x = array.indexOf(values[i]);
				if (x !== -1) {
					array.splice(x, 1);
					i--;
				} else {
					break;
				}
			}
		}
	}
	{
	const array = [1, 2, 3, 4, 5, 6, 7, 6, 1];
	removeElements(array, 5, 1, 6);
	console.log(array);
	}

	{
	const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
	removeElements(array, 'Lima', 'Berlin', 'Kiev');
	console.log(array);
	}
}

//TASK 3
{
	//возвращает ПОСЛЕДНИЕ из поторяющихся элементов
	// function unique(array) {
	// 	return array.filter(function(item, i, arr){
	// 		return false === array.includes(item, i + 1);
	// 	});
	// }

	//возвращает ПЕРВЫЕ из поторяющихся элементов
	function unique(array) {
		let uniqueArray = array.slice();
		for (var i = 0; i < uniqueArray.length; i++) {
			while (true) {
				let x = uniqueArray.indexOf(uniqueArray[i], i + 1);
				if (x !== -1) {
					uniqueArray.splice(x, 1);
					i--;
				} else {
					break;
				}
			}
		}
		return uniqueArray;
	}

	{
	const result = unique([2, 1, 1, 3, 2]);
	console.log(result);
	}

	{
	const result = unique(['top', 'bottom', 'top', 'left']);
	console.log(result);
	}
}

//TASK 4
{
	function difference(array1, array2) {
		return array1.filter(function(item, i, arr){
			return false === array2.includes(item, 0);
		});
	}

	{
	const array1 = [7, -2, 10, 5, 0];
	const array2 = [0, 10];
	const result = difference(array1, array2);
	console.log(result);
	}

	{
	const array1 = ['Beijing', 'Kiev'];
	const array2 = ['Kiev', 'London', 'Baghdad'];
	const result = difference(array1, array2);
	console.log(result);
	}
}
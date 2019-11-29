//https://codesandbox.io/s/winter-flower-o18vh?fontsize=14&hidenavigation=1&theme=dark

//TASK 1
{
	function removeElement(array, value) {
		for (let i = array.length - 1; i >= 0; i--) {
			if (~array.indexOf(value)) {
				array.splice(array.indexOf(value), 1);
			}
		}
	}
	console.log("TASK 1");
	{
		const array = [1, 2, 3, 4, 5, 5, 6, 7];
		removeElement(array, 5);
		console.log(array);
	}
	{
		const array = ["Kiev", "Beijing", "Lima", "Saratov"];
		removeElement(array, "Lima");
		removeElement(array, "Berlin");
		console.log(array);
	}
}

//TASK 2
{
	function removeElements(array, ...values) {
		for (let i = 0; i < values.length; i++) {
			for (let j = array.length - 1; j >= 0; j--) {
				if (~array.indexOf(values[i])) {
					array.splice(array.indexOf(values[i]), 1);
				}
			}
		}
	}
	console.log("TASK 2");
	{
		const array = [1, 2, 3, 4, 5, 6, 7, 6, 1];
		removeElements(array, 5, 1, 6);
		console.log(array);
	}
	{
		const array = ["Kiev", "Beijing", "Lima", "Saratov"];
		removeElements(array, "Lima", "Berlin", "Kiev");
		console.log(array);
	}
}

//TASK 3
{
	//возвращает ПЕРВЫЕ из повторяющихся элементов
	function firstUnique(array) {
		let uniqueArray = array.slice();
		for (let i = uniqueArray.length; i >= 0; i--) {
			let x = uniqueArray.indexOf(uniqueArray[i], i + 1);
			if (~x) {
				uniqueArray.splice(x, 1);
			}
		}
		return uniqueArray;
	}
	// возвращает ПОСЛЕДНИЕ из поторяющихся элементов
	function lastUnique(array) {
		return array.filter((element, i) => !array.includes(element, i + 1));
	}
	console.log("TASK 4");
	console.log("ПЕРВЫЕ из повторяющихся элементов");
	{
		const result = firstUnique([2, 1, 1, 3, 2]);
		console.log(result);
	}
	{
		const result = firstUnique(["top", "bottom", "top", "left"]);
		console.log(result);
	}
	console.log("ПОСЛЕДНИЕ из повторяющихся элементов");
	{
		const result = lastUnique([2, 1, 1, 3, 2]);
		console.log(result);
	}
	{
		const result = lastUnique(["top", "bottom", "top", "left"]);
		console.log(result);
	}
}

//TASK 4
{
	function difference(array1, array2) {
		return array1.filter(item => !array2.includes(item, 0));
	}
	console.log("TASK 4");
	{
		const array1 = [7, -2, 10, 5, 0];
		const array2 = [0, 10];
		const result = difference(array1, array2);
		console.log(result);
	}
	{
		const array1 = ["Beijing", "Kiev"];
		const array2 = ["Kiev", "London", "Baghdad"];
		const result = difference(array1, array2);
		console.log(result);
	}
}


/*
	To add new methods update objects: "arrMethods" and "functions".
	To change starting active item - update: "currentActiveItem".
*/

//---VARS START---

const arrMethods = {
	/*
		methods = {
			array metod: [
				1st argument name,
				2nd argument name,
				...
			]
		}
	*/
	concat: [
		"array",
	],
	reverse: [],
	slice: [
		"begin",
		"end",
	],
	splice: [
		"start",
		"delete count",
		"insert element",
	],
	includes: [
		"search element",
		"from index",
	],
	push: [
		"element",
	],
}

const functions = {
	/*
	array = [
		original array,   // array[0]
		method arguments, // array[1...]
		...,
	]
*/
	concat: function(arr, separator) {
		let new_array =  arr[0].split(separator).concat(arr[1].split(separator));
		return new_array;
	},
	reverse: function(arr, separator) {
		let new_array = arr[0].split(separator).reverse();
		return new_array;
	},
	slice: function(arr, separator) {
		let new_array = arr[0].split(separator).slice(arr[1], arr[2]);
		return new_array;
	},
	splice: function(arr, separator) {
		let new_array = arr[0].split(separator);
		if (arr[3] !== "") {
			new_array.splice(arr[1], arr[2], arr[3]);
		} else {
			new_array.splice(arr[1], arr[2]);
		}
		return new_array;
	},
	includes: function(arr, separator) {
		let include = arr[0].split(separator).includes(arr[1], arr[2]);
		return include;
	},
	push: function(arr, separator) {
		let new_array = arr[0].split(separator);
		new_array.push(arr[1]);
		return new_array;
	},
}; 

let currentActiveItem = {
	id: Object.keys(arrMethods)[0],
	isOpen: false,
}

//---VARS END---

Object.keys(arrMethods).forEach((element) => createBlock(element));
document.querySelector("#documentation").addEventListener("click", (event) => createItemBody(event, currentActiveItem));

let openByDefault = new MouseEvent("click", {
	"view": window,
	"bubbles": true,
	"cancelable": false,
});

document.querySelector(`#${currentActiveItem.id}-header`).dispatchEvent(openByDefault);


//---FUNCTION START---

function createBlock(title) {
	let newItem = document.createElement("div");
	newItem.id = title;
	document.querySelector("#documentation").appendChild(newItem);

	let itemHeader = document.createElement("div");
	itemHeader.classList.add("item-header", "item");
	itemHeader.id = `${title}-header`;
	itemHeader.appendChild(
		document.createTextNode(title[0].toUpperCase() + title.slice(1))
	);
	newItem.appendChild(itemHeader);
}

function createItemBody(event, active) {
	if (event.target.classList.contains("item-header")) {
		let deactivated = active.id;
		active.id = event.target.parentNode.id;

		if (deactivated !== active.id) {
			let itemBody = document.createElement("div");
			itemBody.id = `${active.id}-body`;
			itemBody.classList.add("item");

			createItemBodyElements(active.id, itemBody);

			document.querySelector(`#${active.id}`).appendChild(itemBody);
			removeItemBody(deactivated, active.id);
			active.isOpen = true;
		} else {
			if (active.isOpen === true) {
				removeItemBody(deactivated, active.id);
				active.isOpen = false;
			} else {
				active.id = "";
				createItemBody(event, active);
			}
		}
	}
}

function removeItemBody(id_1, id_2) {
	if (id_1 !== id_2) {
		if (document.querySelector(`#${id_1}-body`)) {
			document.querySelector(`#${id_1}-body`).remove();
		}
	} else {
		document.querySelector(`#${id_2}-body`).remove();
	}
}

function createItemBodyElements(id, parent) {
	parent.appendChild(document.createTextNode("Original array"));

	let original = document.createElement("input");
	original.type = "text";
	original.id = `${id}-original`;
	parent.appendChild(original);
	parent.appendChild(document.createTextNode("Separator"));

	let separator = document.createElement("input");
	separator.id = `${id}-separator`;
	separator.maxLength = 3;
	separator.classList.add("item-separator");
	parent.appendChild(separator);

	if (arrMethods[id].length > 0) {
		for (let i = 0; i < arrMethods[id].length; i++) {
			let argumentInput = document.createElement("input");
			argumentInput.id = `${id}-arg_${i}`;
			argumentInput.classList.add("item-arguments");
			parent.appendChild(document.createTextNode(arrMethods[id][i]));
			parent.appendChild(argumentInput);
		}
	}

	let submit = document.createElement("input");
	submit.type = "button";
	submit.value = "Get result";
	submit.id = `${id}-submit`;
	parent.appendChild(submit);
	submit.addEventListener("click", event => getReuslt(id, parent));
}

function getReuslt(id, parent) {
	if (document.querySelector(`#${id}-result`)) {
		document.querySelector(`#${id}-result`).remove();
	}

	let metodArgsValues = [];

	if (document.querySelector(`#${id}-original`)) {
		metodArgsValues.push(
			document.querySelector(`#${id}-original`).value);

		for (let i = 0; i < arrMethods[id].length; i++) {
			metodArgsValues.push(
				document.querySelector(`#${id}-arg_${i}`).value);
		}
	}

	let resultText = functions[id](
		metodArgsValues,
		document.querySelector(`#${id}-separator`).value
	);
	console.log(resultText);
	let result = document.createElement("div");
	result.id = `${id}-result`;
	result.appendChild(document.createTextNode(`Result: ${resultText}`));
	parent.appendChild(result);
}
//---FUNCTIONS END---
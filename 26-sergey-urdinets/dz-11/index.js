
/*
	To add new methods update objects: "arrMethods" and "functions".
	To change starting active item - update: "currentActiveItem".
*/

//---VARS START---

const arrMethods = {
	/*
		object = {
			array metod: {
				arguments quantity: number;
				argument number: argument name,
				...
		}
	*/
	concat: {
		argsQty: 1,
		0: "array",
	},
	reverse: {
		argsQty: 0,
	},
	slice: {
		argsQty: 2,
		0: "begin",
		1: "end",
	},
	splice: {
		argsQty: 3,
		0: "start",
		1: "delete count",
		2: "insert element",
	},
	includes: {
		argsQty: 2,
		0: "search element",
		1: "from index",
	},
	push: {
		argsQty: 1,
		0: "element",
	},
}

const functions = {
	/*
	object = {
		value_0: original array,
		value_n...: method arguments,
	}
*/
	concat: function(object, separator) {
		let new_array =  object.value_0.split(separator).concat(object.value_1.split(separator));
		return new_array;
	},
	reverse: function(object, separator) {
		let new_array = object.value_0.split(separator).reverse();
		return new_array;
	},
	slice: function(object, separator) {
		let new_array = object.value_0.split(separator).slice(object.value_1, object.value_2);
		return new_array;
	},
	splice: function(object, separator) {
		let new_array = object.value_0.split(separator);
		new_array.splice(object.value_1, object.value_2, object.value_3);
		return new_array;
	},
	includes: function(object, separator) {
		let include = object.value_0.split(separator).includes(object.value_1, object.value_2);
		return include;
	},
	push: function(object, separator) {
		let new_array = object.value_0.split(separator);
		new_array.push(object.value_1);
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
	itemHeader.style.cssText = "background-color: lightgray; border: 1px solid black; cursor: pointer; padding: 10px";
	itemHeader.classList.add("item-header");
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
			itemBody.style.cssText = "border: 1px solid black; padding: 10px";
			itemBody.id = `${active.id}-body`;

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
	original.style.margin = "10px";
	original.id = `${id}-original`;
	parent.appendChild(original);
	parent.appendChild(document.createTextNode("Separator"));

	let separator = document.createElement("input");
	separator.id = `${id}-separator`;
	separator.maxLength = 3;
	separator.style.width = "25px";
	separator.style.margin = "10px";
	parent.appendChild(separator);

	if (arrMethods[id].argsQty > 0) {
		for (let i = 0; i < arrMethods[id].argsQty; i++) {
			let argumentInput = document.createElement("input");
			argumentInput.id = `${id}-arg_${i}`;
			argumentInput.style.marginRight = "10px";
			argumentInput.style.marginLeft = "4px";
			parent.appendChild(document.createTextNode(arrMethods[id][i]));
			parent.appendChild(argumentInput);
		}
	}

	let submit = document.createElement("input");
	submit.type = "button";
	submit.value = "Get result";
	submit.style.margin = "10px";
	submit.id = `${id}-submit`;
	parent.appendChild(submit);
	submit.addEventListener("click", event => getReuslt(id, parent));
}

function getReuslt(id, parent) {
	if (document.querySelector(`#${id}-result`)) {
		document.querySelector(`#${id}-result`).remove();
	}

	let metodArgs = {};

	if (document.querySelector(`#${id}-original`)) {
		metodArgs.value_0 = document.querySelector(`#${id}-original`).value;

		for (let i = 0; i < arrMethods[id].argsQty; i++) {
			metodArgs[`value_${i + 1}`] = document.querySelector(`#${id}-arg_${i}`).value;
		}
	}

	let resultText = functions[id](
		metodArgs,
		document.querySelector(`#${id}-separator`).value
	);
	console.log(resultText);
	let result = document.createElement("div");
	result.id = `${id}-result`;
	result.appendChild(document.createTextNode(`Result: ${resultText}`));
	parent.appendChild(result);
}
//---FUNCTIONS END---
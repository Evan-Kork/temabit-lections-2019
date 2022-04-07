
let array_methods = {

	0: {
		method_name: "findIndex",
		method_title: "findIndex( )",
		method_discription: "method discription",
		method_args_discription: "method's <strong>arguments</strong> discription",
		method_link_text: "Array.prototype.findIndex( callback(element [, index [, array]]) [, thisArg] )",
		method_link_href: "https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array",
		method_args: ["callback"],
	},

	1: {
		method_name: "indexOf",
		method_title: "indexOf( )",
		method_discription: "method discription",
		method_args_discription: "method's <strong>arguments</strong> discription",
		method_link_text: "Array.prototype.indexOf( searchValue [, fromIndex] )",
		method_link_href: "https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array",
		method_args: ["value", "index"],
	},

	2: {
		method_name: "lastIndexOf",
		method_title: "lastIndexOf( )",
		method_discription: "method discription",
		method_args_discription: "method's <strong>arguments</strong> discription",
		method_link_text: "Array.prototype.lastIndexOf( searchValue [, fromIndex] )",
		method_link_href: "https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array",
		method_args: ["value", "index"],
	},

	3: {
		method_name: "reduce",
		method_title: "reduce( )",
		method_discription: "method discription",
		method_args_discription: "method's <strong>arguments</strong> discription",
		method_link_text: "Array.prototype.reduce( callback(accumulator, element [, index [, array]]) [, initialValue] )",
		method_link_href: "https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array",
		method_args: ["callback", "value"],
	},
}

//------------------------------------------------------------------

class Manual {

	constructor(manual) {
		this.manual = manual;
		manual.addEventListener("click", this.onClick.bind(this));
		this.setCurrentCard();
	}

	onClick(event) {

		let target = event.target;

		if ( target.classList.contains("card-header") ) {
			let card = target.closest(".card");
			this.changeCard(card);
		}

		if ( target.tagName == "BUTTON" ) {
			let card = target.closest(".card");
			this.getCardResult(card);
		}
	}

	changeCard(card) {

		if (this.current_card) {
			this.current_card.querySelector(".card-content").classList.add("d-none");
			this.clearCard(this.current_card);
			if (this.current_card === card) {
				this.current_card = null;
				return;
			}
		}

		card.querySelector(".card-content").classList.remove("d-none");
		this.current_card = card;
	}

	setCurrentCard(card = null) {

		if (!card) card = this.manual.querySelector(".card");
		this.changeCard(card);
	}
 
	clearCard(card) {

		let card_elements = card.querySelectorAll("[data-in_out], [data-variable]"); 
		card_elements.forEach(element => element.value = "");
	}

	getCardResult(card) {

		let result_element = card.querySelector("[data-in_out='result']");
		result_element.value = "RESULT";
	}
}

//------------------------------------------------------------------

class ArrayMethodsManual extends Manual {

	constructor(manual, array_methods) {

		super(manual);
		this.card_tpl = this.current_card;
		this.changeCard(this.card_tpl);
		this.card_tpl.remove();

		for (let array_method of Object.values(array_methods)) {

			let array_method_card = this.createCard(array_method.method_name);
			this.fillCard(array_method_card, array_method);
			this.createCardForm(array_method_card, array_method.method_args);
		}

		this.setCurrentCard();
	}

	createCard(name) {

		let card = this.card_tpl.cloneNode();
		card.dataset.name = name;
		card.innerHTML = this.card_tpl.innerHTML;
		this.manual.append(card);
		return card;
	}

	fillCard(card, content) {

		let card_elements = card.querySelectorAll("[data-type]");
		card_elements.forEach( element => {
			let element_innerHTML = content[element.dataset.type];
			if (!element_innerHTML) return;
			element.innerHTML = content[element.dataset.type]
		});
	}

	createCardForm(card, args_list) {

		let form = card.querySelector("form");
		let args_elements = [...form.args.elements];
		args_elements.forEach(element => {
			if (args_list.includes(element.name)) return;
			element.closest(".input-group").remove();
		});
	}
}

//------------------------------------------------------------------

function arrayMethodTest(card) {
	
	let array_method = card.dataset.name;
	let form = card.querySelector("form");
	let array = form.array.value.split(",").map(element => +element);
	let array_method_args = [...form.args.elements];

	array_method_args = array_method_args
		.filter(element => element.value == "" ? false : true)
		.map(element => element.name == "callback" ? 
			new Function("...args", element.value) :
			+element.value
	);

	try{
		let result = array[array_method]( ...array_method_args );
		form.result.value = Array.isArray(result) ? result.join(" : ") : result;
		form.result.style.color = "";
	} catch (e) {
		form.result.value = "ERROR: " + e.message;
		form.result.style.color = "red";
	}

	form.array_out.value = array.join(" : ");
}

//------------------------------------------------------------------

let manual = document.querySelector(".array_manual");
let array_methods_manual = new ArrayMethodsManual(manual, array_methods);
array_methods_manual.getCardResult = arrayMethodTest;
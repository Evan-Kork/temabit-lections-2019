class MyRequestsForm {
	constructor(form) {
		this.form = form;
		this.input_template = form.querySelector("template");
		this.request = request;
		this.form.add_btn.addEventListener("click", this.add.bind(this));		
		this.form.addEventListener("submit", this.send.bind(this));
		this.form.addEventListener("click", this.delete.bind(this));
	}

	add() {
		let inputs = this.form.input_fields;
		let input = this.input_template.content.cloneNode(true);
		inputs.append(input);
	}

	delete(event) {
		if (event.target.name != "delete_btn") return;
		let input = event.target.parentNode;
		input.remove();
	}

	send(event) {
		event.preventDefault();
		console.log(event);
		this.lock();
		this.clear();
		let inputs = this.form.querySelectorAll(".request");
		let requests = [];
		for (let input of inputs) {
			let url = input.querySelector("input").value;
			requests.push(
				this.request(url)
					.then(response => this.show_response(input, response))
					.catch(error => this.show_error(input, error))
			);
		}
		Promise.all(requests).then(() => this.lock(false));
	}

	clear() {
		let elements = this.form.querySelectorAll(".response *");
		elements.forEach(element => {
			element.innerHTML = "";
			element.dataset.responseStatus="";
		});
	}

	lock(lock = true) {
		let btns = this.form.querySelectorAll("button");
		btns.forEach(btn => btn.disabled = lock);
	}

	show_response(input, response) {
		let res_response = input.querySelector(".response");
		let res_request_url = input.querySelector("[data-response-url]");
		let res_response_code = input.querySelector("[data-response-code]");
		res_request_url.innerHTML = response.url;
		res_response_code.innerHTML = `${response.status} ${response.statusText}`;
		res_response.dataset.responseStatus=Math.floor(response.status / 100) * 100;
	}

	show_error(input, error) {
		let res_response = input.querySelector(".response");
		let res_response_code = input.querySelector("[data-response-code]");
		res_response_code.innerHTML = `${error.name} ${error.message}`;
		res_response.dataset.responseStatus="error";
	}

}

function request(url, options = {}) {
	return fetch(url, options);
}
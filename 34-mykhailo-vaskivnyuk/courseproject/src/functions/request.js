import methods from "../data/openapi";

function request(req, callback) {
	
	const url_base = "http://localhost:9000/api";
	const { method, params } = req;
	const request = method && methods[method] && methods[method].request;
	
	const url = url_base + encodeURI(`${request}${params}`);

	fetch(url)
	.then(response => {
		if (response.ok && response.status == 200) return response;
		else throw new Error("Can't read data. Response code: " + response.status + " !");
	})
	.then(response => response.json())
	.then(response => {
		if (response.status == 0)
			throw new Error("" + response.msg.ua + " !");
		return response.result
	})
	.then(data => callback(data, null))
	.catch(error => callback(null, error));
}

export default request;

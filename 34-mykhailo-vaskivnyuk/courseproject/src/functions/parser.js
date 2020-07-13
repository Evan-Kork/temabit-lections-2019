import React from "react";
let i = 0;
function parser(object) {
	const divs = [];
	for (let field in object) {
		switch(typeof object[field]){
			case "object":
				divs.push(...parser(object[field]));
				break;
			default:
				divs.push(
					<div key={i++}>{field} :: {object[field]}</div>
				);
		}
	}
	return divs;
}

export default parser;

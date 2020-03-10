export function dev_log(data) {
	console.log(data);
}

dev_log.render = function(component) {
	this("Rendering >> " + component.constructor.name);
	this(component);
}
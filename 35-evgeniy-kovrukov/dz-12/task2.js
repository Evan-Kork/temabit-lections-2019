let frozen = {
	a: 1,
	b: 2,
	c: {
		x: 1,
		y: {
			q: 2,
			w: 3
		}
	}
};

function freezeAll(obj) {
	Object.freeze(obj);
	for (var prop in obj) {
		if (typeof obj[prop] === "object") {
			freezeAll(obj[prop]);
			//console.log("Logged output: getProp -> obj[prop]", obj[prop]);
		}
	}
}

freezeAll(frozen);
frozen.a = 10;
frozen.c.x = 100;
frozen.c.y.w = 1000;
console.log(frozen);

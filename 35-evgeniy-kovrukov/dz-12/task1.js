function assert(value, message) {
	if (!value) {
		throw new Error(message);
	} else console.log("done");
}

function test(x) {
	assert(x == 2 && x == 3, "Invalid value");
}

//var x = undefined; /// <== Підібрати коректне значення змінної

var x = {
	i: 2,
	toString: function() {
		return x.i++;
	}
};

test(x);

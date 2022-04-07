"use strict";
//===================================================
function assert(value, message) {
    if (!value) {
        throw new Error(message);
    }
}

function test(x) {
    assert(x == 2 && x == 3, 'Invalid value');
}

//var x = undefined; /// <== Підібрати коректне значення змінної
let x = {
	x: 2,
	toString() {return this.x++}
}

test(x);
//===================================================
function freeze(obj) {
	Object.freeze(obj);
	for (let value of Object.values(obj)) {
		if (typeof(value) == "object") {
			freeze(value);
		}
	}
}

let frozen = {
    a: 1,
    b: 2,
    c: {
        x: 1
    }
};

freeze(frozen);
//===================================================
let FakeDate = (function(fake_date = 0) {

	function FakeDate() {
		if (!(this instanceof FakeDate)) {
			return String(new FakeDate());
		}

		let date_object = new Date(FakeDate.time);
		Object.setPrototypeOf(date_object, FakeDate.prototype);
		return date_object;
	}

	Object.setPrototypeOf(FakeDate, Date);
	FakeDate.prototype = Object.create(Date.prototype);

	FakeDate.setNow = function(time) {
		FakeDate.time = time;
	}

	FakeDate.now = function() {
		return this.time;
	}

	FakeDate.time = fake_date;

	return FakeDate;
})(0);

/*
class FakeDate extends Date {

	constructor() {

		let fake_date = super();

		if (!("fake_time" in this.constructor)) {
			this.constructor.setNow();
		}

		fake_date.setTime(this.constructor.fake_time);
	}

	static now() {

		if ("fake_time" in this)
			return this.fake_time;

		return this.setNow();
	}

	static setNow(fake_time = null) {

		this.fake_time = (fake_time === null)
			? Date.now() : fake_time;

		return this.fake_time;
	}

}
*/

let one_day = 24 * 60 * 60 * 1000;

console.log(FakeDate());

console.log(new Date(FakeDate.now()));

console.log(new FakeDate());

FakeDate.setNow(FakeDate.now() + one_day);

console.log(FakeDate());

console.log(new Date(FakeDate.now()));

console.log(new FakeDate());
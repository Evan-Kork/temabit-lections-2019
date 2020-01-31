let FakeDate = (function(value = 0) {
	function FakeDate() {
		if (!(this instanceof FakeDate)) {
			return (new FakeDate(value)).toString();
		}

		this.FakeDate = new Date(FakeDate.value);
		Object.setPrototypeOf(this.FakeDate, FakeDate.prototype);
		return this.FakeDate;
	}

	Object.setPrototypeOf(FakeDate, Date);
	FakeDate.prototype = Object.create(Date.prototype);

	FakeDate.now = function() {
		return this.value;
	};

	FakeDate.setNow = function(value) {
		FakeDate.value = value;
		return value;
	};
	FakeDate.value = value;
	return FakeDate;
})(0);

let day = 24 * 60 * 60 * 1000;
let month = day * 31;

console.log(new FakeDate());
console.log("Logged output: FakeDate.now()", FakeDate.now());

console.log(
	"Logged output: FakeDate.setNow(FakeDate.now() + month)",
	FakeDate.setNow(FakeDate.now() + month)
);

console.log("Logged output: FakeDate()", FakeDate());
console.log(new FakeDate());

function FakeDate(...value) {
	if (!new.target) { 
		return new FakeDate(...value).toString();
	}

	let myDate = new Date(...value);

	myDate.setNow = function(...value){
		this.setTime(...value);
	};

	Object.setPrototypeOf(myDate, FakeDate.prototype);

	return myDate;
}

FakeDate.prototype = Object.create(Date.prototype);
Object.setPrototypeOf(FakeDate, Date);

console.log("Date():     ", Date());
console.log("FakeDate(): ", FakeDate());
console.log("typeof(Date()):     ", typeof(Date()));
console.log("typeof(FakeDate()): ", typeof(FakeDate()));
console.log("----------------");
console.log("new Date():     ", new Date());
console.log("new FakeDate(): ", new FakeDate());
console.log("----------------");
console.log("Date.now():     ", Date.now());
console.log("FakeDate.now(): ", FakeDate.now());
console.log("----------------");

console.log("new Date(86400000):     ", new Date(86400000));
console.log("new FakeDate(86400000): ", new FakeDate(86400000)); // 24*60*60*1000 = 86400000
console.log("----------------");

let x = new FakeDate();
console.log(x);
x.setNow(55555555555);
console.log(x);
console.log( x instanceof FakeDate);

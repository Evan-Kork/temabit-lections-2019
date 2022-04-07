function FakeDate(...value) {
	if (!new.target) { 
		return new FakeDate(...value).toString();
	}

	let myDate = new Date(...value);
	Object.setPrototypeOf(myDate, FakeDate.prototype);
		return myDate;
}

FakeDate.setNow = function(...value){
	return (new Date(...value)).valueOf();
};

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
console.log("FakeDate.setNow(1995, 11, 17): ", FakeDate.setNow(1995, 11, 17));
console.log("FakeDate.setNow('December 17, 1995 03:24:00'): ", FakeDate.setNow('December 17, 1995 00:00:00'));
console.log("new FakeDate() instanceof FakeDate: ", new FakeDate() instanceof FakeDate);

class FakeDate {
	constructor() {
		this.fake = new Date();
		this.fake.setDate(12);
		this.fake.setMonth(5);
		this.fake.setFullYear(2001);
	}
	
	fakeDate(){
		return this.fake;
	}
	now(){
		return this.fake.getMilliseconds();
	}
	setNow(){
		this.fake = new Date();
		this.fake.setDate(5);
		this.fake.setMonth(2);
		this.fake.setFullYear(1999);
		return this.fake
	}
}

const fakeDate = new FakeDate();

console.log(Date());
console.log(fakeDate.fakeDate());
console.log(fakeDate.now());
console.log(fakeDate.setNow(21,5,2001));


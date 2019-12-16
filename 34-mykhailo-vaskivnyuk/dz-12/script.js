class FakeDate extends Date {

	constructor(date = 0) {

		let fake_date = super(date);

		if ("fake_time" in this.constructor) {
			fake_date.setTime(this.constructor.fake_time);
		} else {
			this.constructor.fake_time = fake_date.getTime();
		}

		return fake_date;
	}

	static now() {

		if ("fake_time" in this)
			return this.fake_time;

		return this.setNow();
	}

	static setNow(fake_time = null) {

		this.fake_time = (fake_time == null)
			? Date.now() : fake_time;

		return this.fake_time;
	}

}

let one_day = 24 * 60 * 60 * 1000;

let fake_date = new FakeDate("2019-01-01");
let fake_time = FakeDate.now();
console.log(new Date(fake_time));

fake_date = new FakeDate();
fake_time = FakeDate.now();
console.log(new Date(fake_time));

FakeDate.setNow(fake_time - one_day);
fake_time = FakeDate.now();
console.log(new Date(fake_time));

fake_date = new FakeDate();
fake_time = FakeDate.now();
console.log(new Date(fake_time));
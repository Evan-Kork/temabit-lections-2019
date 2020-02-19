function logAndEval(code) { console.log('%s ===> %j', code, eval(code)); }
class fakeData {
	constructor(year, month, date) {
		this.data = new Date();
		this.data.setFullYear(year, month, date);
	}
}
class randomFakeData {
	constructor() {
		this.data = new Date();
		this.data.setFullYear(randomNum(1970, 2020), randomNum(1, 12), randomNum(1, 30));

		function randomNum(min, max) {
			return Math.random() * (max - min) + min;
		}
	}
}
class randomFakeDataNow{
	constructor() {
		var data= Date.now();
		this.now = Math.floor(Math.random() * (data - 1) + 1);
	}
}
var fake_Data = new fakeData(2001, 5, 10);
var random_Fake_Data= new randomFakeData();
var random_Fake_Data_Now = new randomFakeDataNow();
console.log("fake data",fake_Data);
console.log("random_Fake_Data",random_Fake_Data);
console.log("random_Fake_Data_Now",random_Fake_Data_Now);



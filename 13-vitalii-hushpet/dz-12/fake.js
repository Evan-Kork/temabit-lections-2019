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
		this.now = Math.floor(Math.random() * (data - 1) + 1)
	}
}
class test{
	constructor(){
		this.data = new Date(1000 * 60 * 60 * 24);
		var i = this.data.now;
		console.log(i)
	}
}
var fake_Data = new fakeData(2001, 5, 10);
var random_Fake_Data= new randomFakeData();
var random_Fake_Data_Now = new randomFakeDataNow();
console.log("fake data",fake_Data);
console.log("random_Fake_Data",random_Fake_Data);
console.log("random_Fake_Data_Now",random_Fake_Data_Now);
console.log(new test())



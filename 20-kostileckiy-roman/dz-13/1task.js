class FakeDate{
    constructor(date, month, year){
        this.fake = new Date();
        this.fake.setDate(date);
        this.fake.setMonth(month);
        this.fake.setFullYear(year);
    }
}
class RandomDate extends FakeDate{
    constructor(options){
        super()
        this.fake = new Date()
        this.fake.setDate(Math.floor(Math.random()*31))
        this.fake.setMonth(Math.floor(Math.random()*12))
        this.fake.setFullYear(Math.floor(Math.random()*(1970 - 2020) + 2020))
        }
    }
const fDate = new FakeDate(1,0,2001);
const rDate = new RandomDate()
console.log(fDate.fake)
console.log(rDate.fake)
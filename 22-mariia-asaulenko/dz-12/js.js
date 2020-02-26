// Розробити клас FakeDate для підміни класу Date з можливістю підміни
//  реальної дати на зарання вказану.
// Відмінності від Date:
// - FakeDate() - повинен працювати аналогічним чином, але повертати "фейкове" 
// число мілісекунд від 1 січня 1970 року (00:00:00 за UTC).
// - new FakeDate() - повинен створювати новий екземпляр з "фейковою" датою.
// - FakeDate.now() - повинен працювати аналогічним чином, але повертати "фейкове"
//  число мілісекунд від 1 січня 1970 року (00:00:00 за UTC).
// - FakeDate.setNow(value) - повинен вказувати "фейкове" число мілісекунд від 1 січня 
// 1970 року (00:00:00 за UTC).

class FakeDate {
    constructor(...date) {
        this.fakeDate = date.length ? new Date(...date) : new Date (1990,0,1);
    }
    now() {
        let date = this.fakeDate
        return date.getTime()
    }
    setNow(value) {
        return Date.parse(value);
    }
}

let test = new FakeDate();
console.log('new FakeDate', test);
console.log('FakeDate.now', test.now());
console.log('FakeDate.setNow', test.setNow('2012-01-26'));


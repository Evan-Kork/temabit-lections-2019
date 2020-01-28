/*
    in the bash
git checkout feature/06-vasyl-savitskyy/dz-12
node 06-vasyl-savitskyy/dz-12/main.js
*/

const logAndEval = (code) => console.log('%s ==> %o', code, eval(code));
/*
*   Задача 1
*/
function assert(value, message) {
    if (!value) {
        throw new Error(message);
    }
    console.log('task 1 done');
}

function test(x) {
    assert(x == 2 && x == 3, 'Invalid value');
}

var x = {
    value: 1,
    valueOf: function () {
        return this.value += 1;
    }
}; /// <== Підібрати коректне значення змінної
test(x);

/*
*   Задача 2
* Розробити функцію для "рекурсивно-вкладеного" "замороження" властивостей об'єкта.
*/
var frozen = {
    a: 1,
    b: 2,
    c: {
        x: 1,
        y: {
            f: 3,
            g: {
                h: 9
            }
        }
    }
};

function freezeTask2(obj) {
    getProp(obj);

    function getProp(o) {
        Object.freeze(o);

        for (const prop in o) {
            if (typeof (o[prop]) === 'object') {
                getProp(o[prop]);
            }
        }
    }
}
freezeTask2(frozen);
logAndEval('(frozen)');
logAndEval('(frozen.a = 3, frozen)');
logAndEval('(frozen.c.x = 42, frozen)');
logAndEval('(frozen.c.y.g.h = 15, frozen)');

/*
*   Задача 3
* Розробити клас FakeDate для підміни класу Date з можливістю підміни реальної дати на зарання вказану. MDN: Date
* Відмінності від Date:
*    -   FakeDate() - повинен працювати аналогічним чином, але повертати "фейкову" стрічку дати від 1 січня 1970 року (00:00:00 за UTC).
*    -   new FakeDate() - повинен створювати новий екземпляр з "фейковою" датою.
*    -   FakeDate.now() - повинен працювати аналогічним чином, але повертати "фейкове" число мілісекунд від 1 січня 1970 року (00:00:00 за UTC).
*    -   FakeDate.setNow(value) - повинен вказувати "фейкове" число мілісекунд від 1 січня 1970 року (00:00:00 за UTC).
*/

const FakeDate = (function(val = 922838400000) {
    function CreateDate() {
        if(!(this instanceof CreateDate)) {
            return String(new CreateDate());
        }

        this.createDate = new Date(CreateDate.val);
        Object.setPrototypeOf(this.createDate, CreateDate.prototype);
        return this.createDate;
    }

    Object.setPrototypeOf(CreateDate, Date);
    CreateDate.prototype = Object.create(Date.prototype);

    CreateDate.now = function() {
        return this.val;
    }

    CreateDate.setNow = function(val) {
        if (isNaN(val) || !isFinite(val)) {
            throw new Error('val is not correct');
        }
        CreateDate.val = val;
        return true;
    }

    CreateDate.val = val;

    return CreateDate;
})();

logAndEval('FakeDate()');
logAndEval('new FakeDate()');
logAndEval('FakeDate.now()');
logAndEval('FakeDate.setNow(FakeDate.now() + 864000000)');
logAndEval('FakeDate()');
logAndEval('new FakeDate()');
logAndEval('FakeDate.now()');

const dataMethods = {
    'method-map' : {
        name: 'Map',
        description: 'Метод {map()} создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.',
        myDescription: 'Для примера - каждый элемент из входящих данных будет умножен на введенное число',
        descriptionInput:{
            input:{
                descr: 'Входные данные, строка разделена{,}',
            },
            input2:{
                descr: 'Число которое будет умножено с каждым числом из входящих данных',
            }
        },
    },
    'method-concat' : {
        name: 'Concat',
        description: 'Метод {concat()} объединяет текст из двух или более строк и возвращает новую строку.',
        myDescription: 'Для примера - текст №1 и текст №2 будет объединен и выведен ниже',
        descriptionInput:{
            input:{
                descr: 'Текст №1',
            },
            input2:{
                descr: 'Текст №2',
            }
        },
    },
    'method-find' : {
        name: 'Find',
        description: 'Метод {find()} возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается {undefined}.',
        myDescription: 'Для примера - будет осуществлен поиск первого числа из входящих данных удовлетворяющего условие, знаками больше {>}, меньше{<} и какое-то число, задайте такое условие',
        descriptionInput:{
            input:{
                descr: 'Входные данные, строка разделена{,}',
            },
            input2:{
                descr: 'Условие для примера - {>5}',
            }
        },
    },
    'method-filter' : {
        name: 'Filter',
        description: 'Метод {filter()} создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.',
        myDescription: 'Для примера - будет осуществлен поиск всех чисел (если это строка то она тоже должна удовлетворять условие (по длине символов)) из входящих данных, знаками больше {>}, меньше{<} и какое-то число, задайте такое условие',
        descriptionInput:{
            input:{
                descr: 'Входные данные, строка разделена{,}',
            },
            input2:{
                descr: 'Условие для примера - {>5}',
            }
        },
    },
};

renderMethods(dataMethods);
function renderMethods(dataMethods){
    let slideBoxes = document.getElementById('slide-methods-boxes');
    slideBoxes.addEventListener("click", toggleSlide, false);

    if(slideBoxes){
        let out = '';
        let iter = 0;
        let iter2 = 1;
        for (let item in dataMethods) {
            let classMethod = '';
            let itemTemp = dataMethods[item];

            if(iter == 0){
                classMethod = 'slide-box open';
            }else{
                classMethod = 'slide-box';
            }
            out += '<div id="method-'+convertToLowercase(itemTemp.name)+'" data-nameMethod="'+convertToLowercase(itemTemp.name)+'" class="'+classMethod+'">'+
                    '<div class="slide-title">'+
                    '<h4 class="title">'+replaceBracketInText(itemTemp.description)+'</h4>'+
                    '<button type="button" class="btn-slide-toggle"></button></div>'+
                    '<div class="slide-content"><div class="description">'+replaceBracketInText(itemTemp.myDescription)+'</div><div class="slide-panel-control"><div class="line half-line">';

            for (let itemDesc in itemTemp.descriptionInput) {
                let itemTempDesc =  itemTemp.descriptionInput[itemDesc].descr;
                out += '<div class="wrapp-input">'+
                        '<p class="label">'+replaceBracketInText(itemTempDesc)+'</p>'+
                        '<input type="text" placeholder="argument-'+iter2+'">'+
                        '</div>';
                iter2++;
            }
            out += '</div><div class="line line-run"><button type="button" class="run-method">виконати</button></div>'+
                    '</div><code></code></div></div>';

            iter2 = 1;
            iter++;
        }
        slideBoxes.innerHTML = out;
    }
}



function toggleSlide(event){
    let target = event.target;
    let slideBox = target.closest(".slide-box");
    switch (target.classList[0]) {
        case 'btn-slide-toggle':
            checkVisibleSlide(slideBox);
        break;
        case 'run-method':
            startProces(slideBox);
        break;
        default:
        break;
    }
}


function checkVisibleSlide(slideBox){
    for (let box of slideBox.parentNode.children) {
        if(box.classList.contains("open") && !(box.isEqualNode(slideBox))) {
            box.classList.remove("open");
            clearSlide(true,slideBox);
        }
    }
    if(!slideBox.classList.contains("open")){
        slideBox.classList.add("open");
    }
}


function startProces(slideBox){
    let nameMethod = slideBox.dataset.namemethod;
    let inputs = slideBox.querySelectorAll('.slide-panel-control input');
    let inputValue = [];
    for (let input of inputs) {
        if(input.value){
            if(input.classList.contains('error')){
                input.classList.remove('error');
            }
            inputValue.push(input.value);
        }else{
            input.classList.add('error');
        }
    }
    if(inputValue.length == 2){
        switch (nameMethod) {
            case 'map':
                drowningResults(runMethodMap(inputValue),slideBox);
            break;
            case 'concat':
                drowningResults(runMethodConcat(inputValue),slideBox);
            break;
            case 'find':
                drowningResults(runMethodFind(inputValue),slideBox);
            break;
            case 'filter':
                drowningResults(runMethodFilter(inputValue),slideBox);
            break;
            default:
            break;
        }
    }
}




function runMethodMap(data){
    let firstArg = convertStringToArray(data[0]);
    let fixedFirstArg = firstArg.filter(item => Number.isInteger(parseInt(item)));

    if(fixedFirstArg.length >= 1){
        if(Number.isInteger(parseInt(data[1]))){
            let res = fixedFirstArg.map(function(num) {
                return num * data[1];
            });
            return [true, convertArrayToString(res)];
        }else{
            return [false, 'аргумент №2 скорее всего не число'];
        }
    }else{
        return [false, 'не верно введен аргумент №1'];
    }
}
function runMethodConcat(data){
    let res = data[0].concat(' '+data[1]);
    return [true, res];
}
function runMethodFind(data){
    let fixedFirstArg = convertStringToArray(data[0]);
    let secondArg = data[1].split('');
    let fixSecondArgOperator = secondArg[0];
    let secondArgNumb = [];

    for (let i = 1; i < secondArg.length; i++) {
        secondArgNumb.push(secondArg[i])
    };
    let fixSecondArgNumb = parseInt(secondArgNumb.join(''));

    if(secondArg.length >= 2){
        switch (fixSecondArgOperator) {
            case '>':
                return [true, fixedFirstArg.find(currentValue => currentValue > fixSecondArgNumb)];
            break;
            case '<':
                return [true, fixedFirstArg.find(currentValue => currentValue < fixSecondArgNumb)];
            break;
            default:
                return [false, 'не верно введен аргумент №2'];
            break;
        }
    }else{
        return [false, 'не верно введен аргумент №2'];
    }
}
function runMethodFilter(data){
    let firstArg = convertStringToArray(data[0]);
    let secondArg = data[1].split('');
    let fixSecondArgOperator = secondArg[0];
    let fixFirstArg = [];
    let secondArgNumb = [];

    firstArg.forEach(element => {
        if(Number.isInteger(parseInt(element))){
            fixFirstArg.push(parseInt(element));
        }else{
            fixFirstArg.push(element);
        }
    });

    for (let i = 1; i < secondArg.length; i++) {
        secondArgNumb.push(secondArg[i])
    };
    let fixSecondArgNumb = parseInt(secondArgNumb.join(''));

    if(secondArg.length >= 2){
        switch (fixSecondArgOperator) {
            case '>':
                return [true, fixFirstArg.filter(checkLengthValueMax)];
            break;
            case '<':
                return [true, fixFirstArg.filter(checkLengthValueMin)];
            break;
            default:
                return [false, 'не верно введен аргумент №2'];
            break;
        }
    }else{
        return [false, 'не верно введен аргумент №2'];
    }

    function checkLengthValueMax(value){
        return determineData(value) > fixSecondArgNumb;
    }
    function checkLengthValueMin(value){
        return determineData(value) < fixSecondArgNumb;
    }

    function determineData(item){
        if(Number.isInteger(item)){
            return item;
        }else{
            return item.length;
        }
    }
}




function convertStringToArray(str){
    return str.split(',');
}
function convertArrayToString(arr){
    return arr.join();
}
function convertToLowercase(str){
    return str.toLowerCase();
}
function replaceBracketInText(str){
    return str.replace(/{/g, '<code>').replace(/}/g, '</code>');
}


function drowningResults(data, itemInDrow){
    let itemToAppend = itemInDrow.querySelector('.slide-content > code');
    let itemToAppendError = itemInDrow.querySelector('.slide-panel-control .line-run');

    clearSlide(false,itemInDrow);

    if(data[0]){
        itemToAppend.innerHTML = 'Результат: '+data[1];
    }else{
        itemToAppendError.innerHTML += '<p class="massage-error">'+data[1]+'</p>';
    }
}


function clearSlide(inputClear,slide){
    let itemToAppend = slide.querySelector('.slide-content > code');
    let itemMassageError = slide.querySelector('.massage-error');
    if(inputClear){
        let inputs = slide.querySelectorAll('input');
        for (let input of inputs) {
            input.value = '';
        }
    }
    itemToAppend.innerHTML = '';
    if(itemMassageError){
        itemMassageError.remove();
    }
}

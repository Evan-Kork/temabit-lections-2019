let title = document.getElementsByClassName("accordeon-title");
let content = document.getElementsByClassName("accordeon-content");

for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function() {
        if (!(this.classList.contains('active'))) {
            for (let i = 0; i < title.length; i++) {
                title[i].classList.remove('active');
            }
            this.classList.add('active');
        }
        document.getElementById('reverse-Result').value = "";
        document.getElementById('slice-Result').value = "";
        document.getElementById('splice-Result').value = "";
        document.getElementById('concat-Result').value = "";

    })
}


let arrMethod = [{
        title: 'slice',
        content: 'Метод slice() возвращает новый массив, содержащий копию части исходного массива.\
        <br><strong> Синтаксис \
        <br>arr.slice([begin[, end]])</strong><br>\
        <br><strong>begin</strong> Необязательный \
        <br>Индекс (счёт начинается с нуля), по которому начинать извлечение.\
        <br>Если индекс отрицательный, begin указывает смещение от конца последовательности. Вызов slice(-2) извлечёт два последних элемента последовательности.\
        <br>Если begin неопределен, slice() начинает работать с индекса 0.\
        <br>Если begin больше длины последовательности вернется пустой массив.\
        <br><strong>end</strong> Необязательный\
        <br>Индекс(счёт начинается с нуля), по которому заканчивать извлечение.Метод slice() извлекает элементы с индексом меньше end.\
        <br>Вызов slice(1, 4) извлечёт элементы со второго по четвёртый(элементы по индексам 1, 2 и 3).\
        <br>Если индекс отрицательный, end указывает смещение от конца последовательности.Вызов slice(2, -1) извлечёт из последовательности элементы начиная с третьего элемента с начала и заканчивая вторым с конца.\
        <br> Если end опущен, slice() извлекает все элементы до конца последовательности(arr.length). \
        <br><strong>Возвращаемое значение </strong>\
        <br>Новый массив содержащий извлеченные элементы\
        <div>  <br> array <input class="array1" id="slice-array" type="text" value="Банан, Апельсин, Лимон, Яблоко, Манго">\
        <br>  begin  <input id="slice-begin" type="text" value="1"> \
        <br>  end <input id="slice-end" type="text" value="3" > \
        <br>  Result <input class="result" id="slice-Result" type="text" value=""> \
        <br> </div>\
        <div> <button id="slice-submit">  Отримати результат </button> </div>\
        '
    },
    {
        title: 'concat',
        content: 'Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов\
        <br><strong>Синтаксис\
        <br>var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])</strong><br>\
        <br><strong>valueN</strong>\
        <br>Массивы и/или значения, соединяемые в новый массив.\
        <br><strong>Возвращаемое значение</strong>\
        <br>Новый экземпляр Array.\
        <div>  <br> array <input class="array1" id="concat-array" type="text" value="Банан, Апельсин, Лимон">\
        <br>  valueN  <input id="concat-valueN" type="text" value="зеленый, желтый, красный"> \
        <br>  Result <input class="result" id="concat-Result" type="text" value=""> \
        <br> </div>\
        <div> <button id="concat-submit">  Отримати результат </button> </div>\
        '
    },
    {
        title: 'splice',
        content: ' Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые. \
        <br> <strong>Синтаксис \
        <br> array.splice(start, deleteCount[, item1[, item2[, ...]]]) </strong><br>\
        <br><strong>start </strong>\
        <br>Индекс, по которому начинает изменять массив. Если больше длины массива, реальный индекс будет установлен на длину массива. Если отрицателен, указывает индекс элемента с конца.\
        <br> <strong>deleteCount </strong>\
        <br>Целое число, показывающее количество старых удаляемых из массива элементов. Если deleteCount равен 0, элементы не удаляются. В этом случае вы должны указать как минимум один новый элемент. Если deleteCount больше количества элементов, оставшихся в массиве, начиная с индекса start, то будут удалены все элементы до конца массива.\
        <br><strong>itemN</strong> \
        <br>Необязательные параметры. Добавляемые к массиву элементы. Если вы не укажете никакого элемента, splice() просто удалит элементы из массива.\
        <div>  <br> array <input class="array1" id="splice-array" type="text" value="Банан, Апельсин, Лимон, Яблоко, Манго">\
        <br>  start <input id="splice-start" type="text" value="2"> \
        <br>  deleteCount <input id="splice-deleteCount" type="text" value="1" > \
        <br>  itemN <input id="splice-itemN" type="text" value="Вишня"> \
        <br>  Result <input class="result" id="splice-Result" type="text" value=""> \
        <br> </div>\
        <div> <button id="splice-submit">  Отримати результат </button> </div>\
         '
    },
    {
        title: 'reverse',
        content: 'Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.\
        <br><strong>Синтаксис\
        <br>array.reverse()</strong>\
        <br><strong>Возвращаемое значение</strong>\
        <br>Перевернутный массив\
        <div>  <br> array <input class="array1" id="reverse-array" type="text" value="Банан, Апельсин, Лимон, Яблоко, Манго">\
        <br>  Result <input class="result" id="reverse-Result" type="text" value=""> \
        <br> </div>\
        <div> <button id="reverse-submit">  Отримати результат </button> </div>\
        '
    },
];

function FuncSplice() {
    let array = document.getElementById('splice-array').value;
    let start = document.getElementById('splice-start').value;
    let deleteCount = document.getElementById('splice-deleteCount').value;
    let itemN = document.getElementById('splice-itemN').value;

    let rezult = array.split(", ");
    rezult.splice(start, deleteCount, itemN);
    return rezult;
}

function FuncSlice() {
    let array = document.getElementById('slice-array').value.split(", ");
    let begin = document.getElementById('slice-begin').value;
    let end = document.getElementById('slice-end').value;

    return array.slice(begin, end);

}

function FuncConcat() {
    let array = document.getElementById('concat-array').value.split(", ");
    let valueN = document.getElementById('concat-valueN').value.split(", ");
    return array.concat(valueN);
}

function FuncReverse() {
    return document.getElementById('reverse-array').value.split(", ").reverse();
}


for (let i = 0; i < title.length; i++) {
    title[i].innerHTML = arrMethod[i].title;
    content[i].innerHTML = arrMethod[i].content;
}

let buttonSplice = document.getElementById("splice-submit");
buttonSplice.addEventListener("click", function() {
    document.getElementById('splice-Result').value = FuncSplice();
});

let buttonSlice = document.getElementById("slice-submit");
buttonSlice.addEventListener("click", function() {
    document.getElementById('slice-Result').value = FuncSlice();
})

let buttonConcat = document.getElementById("concat-submit");
buttonConcat.addEventListener("click", function() {
    document.getElementById('concat-Result').value = FuncReverse();
})

let buttonReverse = document.getElementById("reverse-submit");
buttonReverse.addEventListener("click", function() {
    document.getElementById('reverse-Result').value = FuncReverse();
})
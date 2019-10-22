const classesItem = ['p-1', 'text-center', 'margin']
const classesItems = ['col-1', 'px-0']
const browser = ['IE', 'Edge', 'Firefox', 'Chrome', 'Safari',
    'Opera', 'iOS Safari', 'Opera Mini', 'Android B.', 'Opera Mob.',
    'Chrome A.', 'Firefox A.']

document.addEventListener("DOMContentLoaded", () => {
    fetch('./assets/data/browser.json')
        .then(res => res.json())
        .then(res => {
            createHeader(res)
            create(res, maxCol(res))
        })
});

function createHeader(res) {
    const table = document.querySelector('#table')
    res.browser.map((items, index) => {
        // - создаем col(столбик)
        const col = document.createElement('div')
        // - добавляем классы col(столбик)
        addClass(col, classesItems)
        // - создаем node
        const node = document.createElement('div')
        node.textContent = browser[index]
        // - добавляем классы node
        addClassSupport(node, 5, classesItem)
        // - добавляем в col(столбик)
        col.append(node)
        // - добавляем в table
        table.append(col)
    })
}

// - создание основной таблицы
function create(res, maxCol) {
    const table = document.querySelector('#table')
    res.browser.map(items => {
        // - создаем col(столбик)
        const col = document.createElement('div')
        // - добавляем классы col(столбик)
        addClass(col, classesItems)
        // - добавляем пустые div(увеличиваем pull)
        addEmptyDiv(col,
            maxCol - items[Object.keys(items)].length
            + spaces(items[Object.keys(items)]) - 1)
        // - по ключу находит поле и проходим
        // - по свойствам
        items[Object.keys(items)].map(item => {
            // - создаем node
            const node = document.createElement('div')
            // - добавляем классы node
            addClassSupport(node, item.support, classesItem)
            // - проверить доступно ли поле current
            if (item.current) {
                node.textContent = item.current
            } else if (item.number) {
                node.textContent = item.number
            }
            // - добавляем в col(столбик)
            col.append(node)
        })
        // - добавляем в table
        table.append(col)
    })
}

function addClass(element, clasess) {
    element.classList.add(...clasess)
}

function addClassSupport(element, state, clasess) {
    if (state === 3) {
        element.classList.add("bg-green")
        element.classList.add("border")
        element.classList.add("text-white")
    } else if (state === 4) {
        element.classList.add("bg-red")
        element.classList.add("border")
        element.classList.add("text-white")
    } else if (state === 2) {
        element.classList.add("bg-green")
        element.classList.add("border-transparent")
        element.classList.add("text-white")
    } else if (state === 1) {
        element.classList.add("bg-yellow")
        element.classList.add("border-transparent")
        element.classList.add("text-white")
    } else if (state === 0) {
        element.classList.add("bg-red")
        element.classList.add("border-transparent")
        element.classList.add("text-white")
    } else if (state === 5) {
        element.classList.add("bg-transparent")
        element.style.borderBottom = `5px solid ${randColor()}`
    } else {
        element.classList.add("text-transparent")
        element.classList.add("border-transparent")
    }

    element.classList.add(...clasess)
}

// - добавляем пустые div для увеличения pull
// - и смещения основных node
function addEmptyDiv(col, count) {
    for (let i = 0; i < count; i++) {
        const div = document.createElement('div')
        addClassSupport(div, -1, classesItem)

        div.textContent = 0

        col.append(div)
    }
}

// - поиск массива с самым большим
// - количеством элементов
function maxCol(res) {
    let index = 0

    res.browser.map(items => {
        if (index < items[Object.keys(items)].length) {
            index = items[Object.keys(items)].length
        }
    })

    return index
}

// - разрыв между конкретной версией
// - и самой новой версией
function spaces(items) {
    let flag = false
    let index = 0

    items.map(item => {
        if (item.current) {
            flag = true
        }
        if (flag) {
            index++
        }
    })

    return index
}

// - преобразуем rgb в hex
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// - случайный цвет
function randColor() {
    return rgbToHex(Math.floor((Math.random() * (255 - 0 + 1)) + 0),
        Math.floor((Math.random() * (255 - 0 + 1)) + 0),
        Math.floor((Math.random() * (255 - 0 + 1)) + 0))
}
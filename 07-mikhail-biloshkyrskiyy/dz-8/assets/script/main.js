function handlerAddLocationItems() {
    try {
        const location = document.getElementById('location')
        const locotionItems = document.getElementById('locotionItems')

        if (location.classList.contains('active')) {
            location.classList.remove('active')
            locotionItems.classList.add('d-none')
        } else {
            location.classList.add('active')
            locotionItems.classList.remove('d-none')
        }
    } catch (err) {
        console.debug(err)
    }
}

function handlerAddNavbarLeft() {
    try {
        const navbarLeft = document.getElementById('navbarLeft')
        navbarLeft.style.height = `100%`
        navbarLeft.style.width = `300px`

        document.body.style.overflow = 'hidden'
    } catch (err) {
        console.debug(err)
    }
}

function handlerCloseNavbarLeft() {
    try {
        const navbarLeft = document.getElementById('navbarLeft')

        navbarLeft.style.height = `100%`
        navbarLeft.style.width = `0`

        document.body.style.overflow = 'visible'
    } catch (err) {
        console.debug(err)
    }
}

function handlerActiveDropdown(id) {
    try {
        const dropdownMenu = document.getElementsByClassName('dropdown__menu')[id - 1]
        if (dropdownMenu.style.height === '100%') {
            dropdownMenu.style.display = 'none'
            dropdownMenu.style.height = '0'
        } else {
            dropdownMenu.style.display = 'block'
            dropdownMenu.style.height = '100%'
        }
    } catch (err) {
        console.debug(err)
    }
}

const params = {
    activeItem: 0,
    activeIndicator: 1,
    schemaSort: []
}
const timeInterval = 5000
const carouselCount = 2

function getCarousel(id) {
    return document.getElementById(`carouselDiapasone_${id}`)
}

function getItem(idCarousel) {
    return getCarousel(idCarousel).getElementsByClassName('carousel__item')
}

function getIndicator(idCarousel) {
    return getCarousel(idCarousel).getElementsByClassName('indicator')
}

function fill(item, { schemaSort }) {
    try {
        for (let i = 0; i < item.length; i++) {
            schemaSort[i] = i + 1
        }
    } catch (err) {
        console.debug(err)
    }
}
function copy(item, { schemaSort }) {
    try {
        for (let i = 0; i < item.length; i++) {
            item[i].style.order = schemaSort[i]
        }
    } catch (err) {
        console.debug(err)
    }
}

function activeIndicator(indicators, activeItem) {
    try {
        R.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.remove('active')
            }
        }, indicators)

        indicators[activeItem].classList.add('active')
    } catch (err) {
        console.debug(err)
    }
}

function sort({ activeItem, schemaSort }) {
    try {
        const tmp = schemaSort[activeItem]
        schemaSort[activeItem] = schemaSort[activeItem + 1]
        schemaSort[activeItem + 1] = tmp
    } catch (err) {
        console.debug(err)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    try {
        const paramsArray = []
        for (let i = 0; i < carouselCount; i++) {
            paramsArray[i] = JSON.parse(JSON.stringify(params))
            fill(getItem(i + 1), paramsArray[i])
        }

        let timerId = setTimeout(function tick() {

            for (let i = 0; i < carouselCount; i++) {
                if (paramsArray[i].activeItem >= paramsArray[i].schemaSort.length - 1) {
                    paramsArray[i].activeItem = 0
                }
                if (paramsArray[i].activeIndicator >= paramsArray[i].schemaSort.length) {
                    paramsArray[i].activeIndicator = 0
                }

                sort(paramsArray[i])
                copy(getItem(i + 1), paramsArray[i])
                activeIndicator(getIndicator(i + 1), paramsArray[i].activeIndicator)

                paramsArray[i].activeItem++
                paramsArray[i].activeIndicator++
            }

            timerId = setTimeout(tick, timeInterval)
        }, timeInterval)
    } catch (err) {
        console.debug(err)
    }
})


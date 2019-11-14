function handlerAddToggleActive() {
    const navbarTogglerIcon = document.getElementById('navbarTogglerIcon')

    if (navbarTogglerIcon.classList.contains("active")) {
        navbarTogglerIcon.classList.remove('active')
    } else {
        navbarTogglerIcon.classList.add('active')
    }
}

function handlerAddLocationItems() {
    const location = document.getElementById('location')
    const locotionItems = document.getElementById('locotionItems')

    if (location.classList.contains('active')) {
        location.classList.remove('active')
        locotionItems.classList.add('d-none')
    } else {
        location.classList.add('active')
        locotionItems.classList.remove('d-none')
    }
}

function handleRangeProductItem(item) {
    const controlRange = document.getElementById(`formControlRange_${item}`)
    const range = document.getElementById(`range_${item}`)

    if (controlRange.value === '50') {
        range.style.marginLeft = '0px'
    } else if (+controlRange.value < 50) {
        range.style.marginLeft = '-' + ((range.offsetWidth / 100) * (50 - controlRange.value)) + "px"
    } else if (+controlRange.value > 50) {
        range.style.marginLeft = ((range.offsetWidth / 100) * (controlRange.value - 50)) + "px"
    }
}

function centerBlockRange(item) {
    const range = document.getElementById(`range_${item}`)
    range.style.marginLeft = `-${range.offsetWidth / 2}px`
}

document.addEventListener("DOMContentLoaded", function() {
    centerBlockRange(1)
    centerBlockRange(2)
})
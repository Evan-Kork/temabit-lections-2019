export const carouselCustom = (rootEvent) => {
    const header = rootEvent.target.closest(".item-header");
    if (header) {
        const items = document.getElementsByClassName("item");
        for (let i = 0; i < items.length; i++) {
            const body = items[i].querySelector(".item-body").classList;
            const footer = items[i].querySelector(".item-footer");
            const resetBtn = items[i].querySelector(".btn__reset");
            resetBtn.disabled = true;
            if (items[i].querySelector(".item-header") === header) {
                body.toggle("d-block");
                body.toggle("d-none");
                footer.classList.toggle("d-block");
                footer.classList.toggle("d-none");
                const resultBlock = footer.querySelector(".result-block")
                while (resultBlock.firstChild) {
                    resultBlock.removeChild(resultBlock.firstChild);
                }
                continue;
            };
            if (/d-block/.exec(body.value)) {
                body.toggle("d-block");
                body.toggle("d-none");
                footer.classList.toggle("d-block");
                footer.classList.toggle("d-none");
                const resultBlock = footer.querySelector(".result-block");
                while (resultBlock.firstChild) {
                    resultBlock.removeChild(resultBlock.firstChild);
                }
            }
        }
    }
};

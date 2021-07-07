import MethodArray from "./MethodArray";
import InputGroup from "../modules/InputGroup";
import Button from "../modules/Button";

class Concat extends MethodArray {
    constructor() {
        super(arguments[0]);
        this._valueN = [];
        if (arguments.length > 1) {
            for (let i = 1; i < arguments.length; i++) {
                this._valueN.push(arguments[i]);
            }
        }
    }

    result() {
        if (document.getElementsByClassName(`${this._name}-result-block`)[0]) {
            const inputArr = document.querySelector(`[name="${this._name}-array"]`);

            if (this.printMessageByEmptyArray(inputArr.value)) return;

            const originArr = inputArr.value.split(",");
            const items = [];
            const itemsBlock = document.getElementsByClassName(`${this._name}-items-block`)[0];
            itemsBlock.childNodes.forEach(node => {
                items.push(node.childNodes[1].value.split(","));
            });
            const convertArray = this.convertArray(items);
            const resultArr = originArr.concat(convertArray);
            const result = this.removeChildren(`${this._name}-result-block`);
            result.innerHTML = `
                <span>Результат:</span><br />
                <span class="ml-4 mr-1">concat:</span><span>${JSON.stringify(resultArr)}</span><br />
                <span class="ml-4 mr-1">origin:</span><span>${JSON.stringify(originArr)}</span>
            `;

            const buttonReset = document.querySelector(`[name="${this._name}-reset"]`);
            buttonReset.disabled = false;
        }

        return;
    }

    drawItems(parent) {
        const name = [...parent.className].splice(0, 6).join("")
        if (parent.childNodes.length) {
            this.removeChildren(parent.className);
        }
        if (this._valueN.length) {
            this._valueN.forEach((val, i) => {
                parent.appendChild(InputGroup({
                    name: `${name}-item${i + 1}`,
                    disabled: this._default,
                    value: val,
                    title: `Item${i + 1}`,
                    class: ["form-control"]
                }));
            });
        }

        return parent;
    }

    handleDefault(bool) {
        this.removeChildren(`${this._name}-result-block`);
        this._default = bool;

        if (document.getElementsByClassName(`${this._name}-body`)[0]) {
            const inputArr = document.querySelector(`[name="${this._name}-array"]`);
            const buttonReset = document.querySelector(`[name="${this._name}-reset"]`);
            buttonReset.disabled = true;

            inputArr.disabled = bool;

            const increaseBtn = document.querySelector(`[name="${this._name}-increase"]`);
            const decreaseBtn = document.querySelector(`[name="${this._name}-decrease"]`);
            increaseBtn.disabled = bool;
            decreaseBtn.disabled = bool;

            if (bool) { // if element Default checked
                const inputCheckbox = document.querySelector(`[name="${this._name}-checkbox"]`);
                inputCheckbox.checked = bool;
                inputArr.value = this._array;
                this.drawItems(document.getElementsByClassName(`${this._name}-items-block`)[0]);
                return;
            }

            // if element Default is not checked
            inputArr.value = [];
            inputArr.placeholder = "str,str,...,str";
            this.removeChildren(`${this._name}-items-block`);
            return;
        }
    }

    mutableItems(e) {
        const itemsDiv = document.getElementsByClassName(`concat-items-block`)[0];
        if (/increase/.exec(e.target.name)) {
            itemsDiv.appendChild(InputGroup({
                name: `${this._name}-item${itemsDiv.children.length + 1}`,
                title: `Item${itemsDiv.children.length + 1}`,
                value: `${itemsDiv.children.length}`,
                class: ["form-control"]
            }));
            return;
        }

        if (!itemsDiv.childNodes.length) return;
        itemsDiv.removeChild(itemsDiv.childNodes[itemsDiv.childNodes.length - 1]);
    }

    draw(bool = false) {
        const item = this.drawHeader();
        // body
        const body = document.createElement("div");
        body.classList.add("card-body", "item-body", "pb-0", `${bool ? "d-block" : "d-none"}`, `${this._name}-body`);
        body.appendChild(InputGroup({
            name: `${this._name}-array`,
            required: true,
            disabled: this._default,
            value: this._array,
            title: "Array",
            class: ["form-control"]
        }));

        const itemsControlDiv = document.createElement("div");
        itemsControlDiv.classList.add("btn-group", "mb-2", "w-100", `${this._name}-items-control-block`);
        itemsControlDiv.appendChild(Button({
            type: "button",
            name: `${this._name}-decrease`,
            child: "-",
            disabled: this._default,
            info: "decrease item",
            onclick: this.mutableItems,
            class: ["btn", "btn-warning", "btn-sm"]
        }));
        itemsControlDiv.appendChild(Button({
            type: "button",
            name: `${this._name}-increase`,
            child: "+",
            disabled: this._default,
            info: "increase item",
            onclick: this.mutableItems,
            class: ["btn", "btn-success", "btn-sm"]
        }));
        body.appendChild(itemsControlDiv);

        const itemsDiv = document.createElement("div");
        // should be one class for drawItems()
        itemsDiv.classList.add(`${this._name}-items-block`);
        body.appendChild(this.drawItems(itemsDiv));

        body.appendChild(InputGroup({
            type: "checkbox",
            name: `${this._name}-checkbox`,
            required: false,
            checked: this._default,
            info: "default data",
            eventList: [{
                type: "click",
                func: e => this.handleDefault(e.target.checked)
            }]
        }));

        item.appendChild(body);

        item.appendChild(this.drawFooter(bool));
        return item;
    }
}

export default Concat;

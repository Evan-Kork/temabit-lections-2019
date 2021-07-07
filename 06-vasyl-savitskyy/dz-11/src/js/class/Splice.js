import MethodArray from "./MethodArray";
import InputGroup from "../modules/InputGroup";
import Button from "../modules/Button";

class Splice extends MethodArray {
    constructor() {
        super(arguments[0]);
        this._start = isNaN(arguments[1]) || arguments[1] === 0 ? 1 : arguments[1];
        this._deleteCount = isNaN(arguments[2]) || arguments[2] === 0 || arguments[2] === null ? arguments[0].array.length - arguments[1] : arguments[2];
        this._items = [];
        if (arguments.length > 3) {
            for (let i = 3; i < arguments.length; i++) {
                this._items.push(arguments[i]);
            }
        }
    }

    result() {
        if (document.getElementsByClassName(`${this._name}-result-block`)[0]) {
            const inputArr = document.querySelector(`[name="${this._name}-array"]`);
            
            if (this.printMessageByEmptyArray(inputArr.value)) return;

            const inputStart = document.querySelector(`[name="${this._name}-start"]`);
            const inputDeleteCount = document.querySelector(`[name="${this._name}-deleteCount"]`);
            const originArr = inputArr.value.split(",");
            const items = [];
            const itemsBlock = document.getElementsByClassName(`${this._name}-items-block`)[0];
            itemsBlock.childNodes.forEach(node => {
                items.push(node.childNodes[1].value.split(","));
            });
            const convertArray = this.convertArray(items);
            const result = this.removeChildren(`${this._name}-result-block`);
            const resultArr = inputDeleteCount.value === "" || !items.length ?
                originArr.splice(inputStart.value)
                :
                originArr.splice(inputStart.value, inputDeleteCount.value, ...convertArray);
            result.innerHTML = `
                <span>Результат:</span><br />
                <span class="ml-4 mr-1">splice:</span><span>${JSON.stringify(resultArr)}</span><br />
                <span class="ml-4 mr-1">origin:</span><span>${JSON.stringify(originArr)}</span>
            `;

            const buttonReset = document.querySelector(`[name="${this._name}-reset"]`);
            buttonReset.disabled = false;
        }

        return;
    }

    handleDefault(bool) {
        this.removeChildren(`${this._name}-result-block`);
        this._default = bool;

        if (document.getElementsByClassName(`${this._name}-body`)[0]) {
            const inputArr = document.querySelector(`[name="${this._name}-array"]`);
            const inputStart = document.querySelector(`[name="${this._name}-start"]`);
            const inputDeleteCount = document.querySelector(`[name="${this._name}-deleteCount"]`);
            const checkboxDeleteCount = document.querySelector(`[name="${this._name}-deleteCount-is-null"]`);
            const buttonReset = document.querySelector(`[name="${this._name}-reset"]`);
            buttonReset.disabled = true;

            inputArr.disabled = bool;
            inputStart.disabled = bool;
            inputDeleteCount.disabled = bool;
            checkboxDeleteCount.disabled = bool;
            const increaseBtn = document.querySelector(`[name="${this._name}-increase"]`);
            const decreaseBtn = document.querySelector(`[name="${this._name}-decrease"]`);
            increaseBtn.disabled = bool;
            decreaseBtn.disabled = bool;

            if (bool) { // if element Default checked
                const inputCheckbox = document.querySelector(`[name="${this._name}-checkbox"]`);
                inputCheckbox.checked = bool;
                inputArr.value = this._array;
                inputStart.value = this._start;
                inputDeleteCount.value = this._deleteCount;
                checkboxDeleteCount.checked = false;
                this.drawItems(document.getElementsByClassName(`${this._name}-items-block`)[0]);
                return;
            }

            // if element Default is not checked
            inputArr.value = [];
            inputArr.placeholder = "str,str,...,str";
            inputStart.value = 1;
            inputDeleteCount.value = 0;
            this.removeChildren(`${this._name}-items-block`);
            return;
        }
    }

    drawItems(parent) {
        const name = [...parent.className].splice(0, 6).join("")
        if (parent.childNodes.length) {
            this.removeChildren(parent.className);
        }
        if (this._items.length) {
            this._items.forEach((val, i) => {
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

    defaultParamIsNull(e, nameInpt, that) {
        const input = document.querySelector(`[name="${nameInpt}"]`);
        input.disabled = e.target.checked;
        const increaseBtn = document.querySelector(`[name="splice-increase"]`);
        const decreaseBtn = document.querySelector(`[name="splice-decrease"]`);
        increaseBtn.disabled = e.target.checked;
        decreaseBtn.disabled = e.target.checked;
        if (e.target.checked) {
            input.value = null;
            that.removeChildren(`splice-items-block`);
        } else {
            input.value = 0;
        }
    }

    mutableItems(e) {
        const itemsDiv = document.getElementsByClassName(`splice-items-block`)[0];
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
        body.appendChild(InputGroup({
            type: "number",
            name: `${this._name}-start`,
            step: 1,
            required: false,
            disabled: this._default,
            value: this._start,
            title: "Start",
            class: ["form-control"],
            // titleEventList: [{
            //     type: "click",
            //     that: this.defaultParamIsNull
            // }]
        }));
        body.appendChild(InputGroup({
            type: "number",
            name: `${this._name}-deleteCount`,
            min: 0,
            step: 1,
            required: false,
            disabled: this._default,
            value: this._deleteCount,
            title: "DCount",
            infoTitle: "delete count",
            class: ["form-control"],
            titleEventList: [{
                type: "click",
                that: this,
                func: this.defaultParamIsNull,
            }]
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

export default Splice;

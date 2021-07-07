import MethodArray from "./MethodArray";
import InputGroup from "../modules/InputGroup";

class Slice extends MethodArray {
    constructor(props, begin, end) {
        super(props);
        this._begin = isNaN(begin) ? 0 : begin;
        this._end = isNaN(end) ? 1 : end;
    }

    result() {
        if (document.getElementsByClassName(`${this._name}-result-block`)[0]) {
            const inputArr = document.querySelector(`[name="${this._name}-array"]`);

            if (this.printMessageByEmptyArray(inputArr.value)) return;

            const inputBegin = document.querySelector(`[name="${this._name}-begin"]`);
            const inputEnd = document.querySelector(`[name="${this._name}-end"]`);
            const checkboxEnd = document.querySelector(`[name="${this._name}-end-is-null"]`);

            const result = this.removeChildren(`${this._name}-result-block`);
            const endValue = checkboxEnd.checked ? inputArr.value.split(",").length : inputEnd.value;
            const resultStr = inputArr.value.split(",").slice(inputBegin.value, endValue);
            result.appendChild(document.createTextNode(`Результат: ${JSON.stringify(resultStr)}`));
            
            const buttonReset = document.querySelector(`[name="${this._name}-reset"]`);
            buttonReset.disabled = false;
        }

        return;
    }

    defaultParamIsNull(e, nameInpt) {
        const input = document.querySelector(`[name="${nameInpt}"]`);
        input.disabled = e.target.checked;
        input.value = e.target.checked ? null : 0;
    }

    handleDefault(bool) {
        this.removeChildren(`${this._name}-result-block`);
        this._default = bool;

        if (document.getElementsByClassName(`${this._name}-body`)[0]) {
            const inputArr = document.querySelector(`[name="${this._name}-array"]`);
            const inputBegin = document.querySelector(`[name="${this._name}-begin"]`);
            const inputEnd = document.querySelector(`[name="${this._name}-end"]`);
            const checkboxEnd = document.querySelector(`[name="${this._name}-end-is-null"]`);
            const buttonReset = document.querySelector(`[name="${this._name}-reset"]`);
            buttonReset.disabled = true;

            inputArr.disabled = bool;
            inputBegin.disabled = bool;
            inputEnd.disabled = bool;
            checkboxEnd.disabled = bool;

            if (bool) { // if element Default checked
                const inputCheckbox = document.querySelector(`[name="${this._name}-checkbox"]`);
                inputCheckbox.checked = bool;
                inputArr.value = this._array;
                inputBegin.value = this._begin;
                inputEnd.value = this._end;
                checkboxEnd.checked = false;
                return;
            }

            // if element Default is not checked
            inputArr.value = [];
            inputArr.placeholder = "str,str,...,str";
            inputBegin.value = 0;
            inputEnd.value = 1;
            return;
        }
    }

    draw(bool = true) {
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
            name: `${this._name}-begin`,
            step: 1,
            required: false,
            disabled: this._default,
            value: this._begin,
            title: "Begin",
            infoTitle: "begin index",
            class: ["form-control"]
        }));
        body.appendChild(InputGroup({
            type: "number",
            name: `${this._name}-end`,
            step: 1,
            required: false,
            disabled: this._default,
            value: this._end,
            title: "End",
            infoTitle: "end index",
            class: ["form-control"],
            titleEventList: [{
                type: "click",
                func: this.defaultParamIsNull,
            }]
        }));
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

export default Slice;

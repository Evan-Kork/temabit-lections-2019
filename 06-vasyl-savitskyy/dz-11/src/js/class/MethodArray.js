import AMethodArray from "./AMethodArray";
import Button from "../modules/Button";

class MethodArray extends AMethodArray {
    constructor(props) {
        super(props);
    }

    convertArray(array) {
        const res = [];
        array.map(arr => arr.length === 1 ? res.push(arr[0]) : res.push(arr));
        return res;
    }

    printMessageByEmptyArray(str) {
        if (str.length) return false;

        const result = this.removeChildren(`${this._name}-result-block`);
        result.appendChild(document.createTextNode("Array is empty!"));
        return true;
    }

    removeChildren(identif) {
        const result = document.getElementsByClassName(identif)[0];
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
        return result;
    }

    reset() {
        const inputReset = document.querySelector(`[name="${this._name}-reset"]`);
        inputReset.disabled = true;
        this.handleDefault(true);
    }

    drawHeader() {
        const item = document.createElement("div");
        item.classList.add("mt-3", "mb-3", "shadow", "rounded", "card", "item");
        // header
        const header = document.createElement("div");
        header.classList.add("card-header", "item-header");
        const h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.appendChild(document.createTextNode(this._name + "()"));
        h5.title = this._info;
        // header.addEventListener("click", (e) => {
        //     console.log(this._name, e.target)
        //     // to do 
        // });
        header.appendChild(h5);
        item.appendChild(header);

        return item;
    }

    drawFooter(bool) {
        const footer = document.createElement("div");
        footer.classList.add("card-footer", `${bool ? "d-block" : "d-none"}`, "item-footer");
        const btnGroup = document.createElement("div");
        btnGroup.classList.add("btn-group", "w-100", "mb-2");
        btnGroup.appendChild(Button({
            type: "button",
            name: `${this._name}-reset`,
            child: "reset",
            disabled: this._default,
            onclick: e => this.reset(),
            class: ["btn", "btn-danger", "btn-sm", "btn__reset"]
        }));
        btnGroup.appendChild(Button({
            type: "button",
            name: `${this._name}-result`,
            child: "result",
            info: this._info,
            onclick: e => this.result(),
            class: ["btn", "btn-primary", "btn-sm"]
        }));
        footer.appendChild(btnGroup);
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result-block", `${this._name}-result-block`);
        footer.appendChild(resultDiv);

        return footer;
    }
}

export default MethodArray;

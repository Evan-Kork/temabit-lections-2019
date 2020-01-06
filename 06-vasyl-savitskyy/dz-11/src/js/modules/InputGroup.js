import Input from "./Input";

const InputGroup = (props) => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group", "input-group-sm", "mb-3");
    
    if (props.hasOwnProperty("title")) {
        const inputGroupPrepend = document.createElement("div");
        inputGroupPrepend.classList.add("input-group-prepend", "input-group-prepend__width");
        const inputGroupText = document.createElement("span");
        inputGroupText.classList.add("input-group-text", "w-100", "d-flex", "justify-content-between");
        const title = document.createTextNode(props.title);
        inputGroupText.appendChild(title);
        if (props.hasOwnProperty("titleEventList")) {
            const label = document.createElement("label");
            label.classList.add("mb-0");
            const text = document.createTextNode("null");
            label.appendChild(text);
            label.appendChild(Input({
                type: "checkbox",
                name: `${props.name}-is-null`,
                class: ["ml-1", "mt-1"],
                info: "value null",
                disabled: props.disabled,
                eventList: [{
                    type: props.titleEventList[0].type,
                    func: (e) => props.titleEventList[0].func(e, props.name, props.titleEventList[0].that)
                }]
            }));
            inputGroupText.appendChild(label);
        }
        if (props.hasOwnProperty("infoTitle")) {
            inputGroupText.title = props.infoTitle;
        }
        inputGroupPrepend.appendChild(inputGroupText);
        inputGroup.appendChild(inputGroupPrepend);
    }

    inputGroup.appendChild(Input(props));
    return inputGroup;
}

export default InputGroup;

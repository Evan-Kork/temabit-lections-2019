const Input = (props) => {
    const input = document.createElement("input");
    input.type = props.hasOwnProperty("type") ? props.type : "text";
    if (props.hasOwnProperty("name")) {
        input.name = props.name;
    }
    if (props.hasOwnProperty("placeholder")) {
        input.placeholder = props.placeholder;
    }
    if (props.hasOwnProperty("required")) {
        input.required = props.required;
    }
    if (props.hasOwnProperty("info")) {
        input.title = props.info;
    }
    if (props.hasOwnProperty("disabled")) {
        input.disabled = props.disabled;
    }
    if (props.hasOwnProperty("step")) {
        input.step = props.step;
    }
    if (props.hasOwnProperty("value")) {
        input.value = props.value;
    }
    if (props.hasOwnProperty("min")) {
        input.min = props.min;
    }
    if (props.hasOwnProperty("max")) {
        input.max = props.max;
    }
    if (props.hasOwnProperty("checked")) {
        input.checked = props.checked;
    }
    if (props.hasOwnProperty("id")) {
        input.id = props.id;
    }
    if (props.hasOwnProperty("class")) {
        input.classList.add(...props.class);
    }
    if (props.hasOwnProperty("eventList")) {
        props.eventList.map(eventListener => input.addEventListener(eventListener.type, eventListener.func));
    }

    return input;
}

export default Input;

const Button = (props) => {
    const button = document.createElement("button");

    if (props.hasOwnProperty("class")) {
        button.classList.add(...props.class);
    }

    if (props.hasOwnProperty("type")) {
        button.type = props.type;
    }

    if (props.hasOwnProperty("name")) {
        button.name = props.name;
    }

    if (props.hasOwnProperty("onclick")) {
        button.onclick = props.onclick;
    }

    if (props.hasOwnProperty("disabled")) {
        button.disabled = props.disabled;
    }

    if (props.hasOwnProperty("value")) {
        button.value = props.value;
    }

    if (props.hasOwnProperty("child")) {
        button.innerHTML = props.child;
    }

    if (props.hasOwnProperty("info")) {
        button.title = props.info;
    }

    if (props.hasOwnProperty("eventList")) {
        props.eventList.map(eventListener => button.addEventListener(eventListener.type, eventListener.func));
    }

    return button;
}

export default Button;

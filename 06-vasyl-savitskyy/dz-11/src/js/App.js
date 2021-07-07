import NotImplemented from "./class/NotImplemented";

class App {
    constructor(nodeMount, array) {
        if (!Array.isArray(array)) {
            throw new NotImplemented("array");
        }
        if (typeof nodeMount !== "object") {
            throw new NotImplemented("nodeMount");
        }
        this._array = array;
        this._node_mount = nodeMount;
        this._title = "Array.prototype.[Methods]"
    }

    render() {
        const h3 = document.createElement("h3");
        h3.classList.add("mt-2", "mb-3", "w-100", "text-center");
        const a = document.createElement("a");
        a.href = "https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array";
        a.appendChild(document.createTextNode(this._title));
        a.target = "_blank";
        a.title = "Array є глобальним об'єктом, що використовується для створення масивів; які є високорівневими, спископодібними об'єктами.";
        h3.appendChild(a);
        this._node_mount.appendChild(h3);

        this._array.map(item => this._node_mount.appendChild(item.draw()));
    }
}

export default App;
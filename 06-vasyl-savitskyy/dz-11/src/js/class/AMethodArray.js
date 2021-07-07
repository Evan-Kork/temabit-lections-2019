import NotImplemented from "./NotImplemented";

class AMethodArray {
    constructor({ name, array, info }) {
        if (this.constructor === AMethodArray) {
            throw new NotImplemented("class " + this.constructor.name);
        }
        if (typeof name !== "string") {
            throw new NotImplemented("name");
        }
        if (typeof info !== "string") {
            throw new NotImplemented("info");
        }
        if (!Array.isArray(array)) {
            throw new NotImplemented("array");
        }
        
        this._name = name;
        this._info = info;
        this._array = array;
        this._error = false;
        this._default = true;
    }

    result() {
        throw new NotImplemented(this.constructor.name + ".result()");
    }

    reset() {
        throw new NotImplemented(this.constructor.name + ".reset()");
    }

    removeChildren() {
        throw new NotImplemented(this.constructor.name + ".removeChildren()");
    }

    handleDefault() {
        throw new NotImplemented(this.constructor.name + ".handleDefault()");
    }

    draw() {
        throw new NotImplemented(this.constructor.name + ".draw()");
    }

    drawHeader() {
        throw new NotImplemented(this.constructor.name + ".drawHeader()");
    }

    drawFooter() {
        throw new NotImplemented(this.constructor.name + ".drawFooter()");
    }
}

export default AMethodArray;

class BaseError extends Error {
    constructor(message, name) {
        super(message);
        this.name = name || this.constructor.name;
    }
}

class NotImplemented extends BaseError {
    constructor(what) {
        super(what + " is not fully implemented");
        this.what = what;
    }
}

export default NotImplemented;

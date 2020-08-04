import React, {Component} from "react";

import ErrorCritical from "../Critical";

class ErrorBoundry extends Component {
    state = {
        error: false
    };

    componentDidCatch() {
        this.setState({error: true});
    };

    render() {
        return this.state.error ? <ErrorCritical /> : this.props.children;
    }
}

export default ErrorBoundry;

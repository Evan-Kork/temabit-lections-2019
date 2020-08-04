import "./style.scss";

import React, { useState } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";
import {useDebouncedCallback} from "use-debounce";

import {withJustinService} from "../../../Hoc";
import {
    fetchTracking
} from "../../../../actions";
import {DEBOUNCED_SEARCH_WAIT, rootHref} from "../../../../config/core";

const SearchTrackingInput = (props) => {
    const [number, setNumber] = useState('');

    const hundleInput = e => {
        setNumber(e.target.value);
        debouncedFunction(encodeURI(e.target.value));
    };

    const [debouncedFunction] = useDebouncedCallback(str => {
        props.fetchTracking(
            `/${str}`,
            () => {
                setNumber('');
                props.history.push(`${rootHref}tracking/${str}`);
            },
            () => console.log("modal error tracking number!")
        );
      }, DEBOUNCED_SEARCH_WAIT);

    return (
        <span  className="justin_search">
            <form
                onSubmit={e=>e.preventDefault()}
                className="d-none d-md-block justin_search_form"
            >
                <input
                    type="test"
                    name="ttn_number"
                    className=""
                    onChange={e => hundleInput(e)}
                    placeholder="Введіть номер відправлення"
                    autoComplete="off"
                    value={number}
                />
            </form>
            <i className="fa fa-search d-block d-md-none" />
        </span>
    );
};

SearchTrackingInput.defaultProps = {
    input: "",
    fetchTracking: () => console.error("wasn't implement function fetchTracking"),
};

SearchTrackingInput.propTypes = {
    input: PropTypes.string,
    fetchTracking: PropTypes.func
};

const mapStateToProps = ({tracking}) => {
    const {input} = tracking;
    return {
        input
    };
}

const mapDispachToProps = (dispatch, ownProps) => {
    const {justinService} = ownProps;
    return {
        fetchTracking: fetchTracking(justinService, dispatch)
    };
}

export default compose(
    withJustinService(),
    connect(mapStateToProps, mapDispachToProps)
)(SearchTrackingInput);

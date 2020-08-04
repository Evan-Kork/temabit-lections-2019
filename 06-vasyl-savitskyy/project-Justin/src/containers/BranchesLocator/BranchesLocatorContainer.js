import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";

import {withJustinService} from "../../components/Hoc";
import {
    fetchBranchesLocator,
    branchesLocatorClear
} from "../../actions";
import BranchesLocatorControls from "../../components/BranchesLocator/Controls";
import BranchesLocatorViewResult from "../../components/BranchesLocator/ViewResult";
import {rootHref} from "../../config/core";

function BranchesLocatorContainer(props) {
    const {address} = props.match.params;

    useEffect(() => {
        if (typeof address !== "undefined") {
            props.fetchBranchesLocator(`/${address}`);
        } else if (props.response) {
            props.branchesLocatorClear();
        }
    }, [address]);

     /** componentWillUnmount */
     useEffect(() => {
        return () => {
            props.branchesLocatorClear();
        }
    },[]);

    const allClear = () => {
        if (props.response !== null && typeof address !== "undefined") {
            props.branchesLocatorClear();
            props.history.push(`${rootHref}branches_locator`);
        }
    }

    return (
        <Fragment>
            <h1 className="w-100 text-center">
                Пошук найближчого відділення
            </h1>

            <BranchesLocatorControls allClear={allClear} {...props} />

            {props.loading ? <h2 className="w-100 text-center">Завантаження даних . . .</h2> : null}

            <BranchesLocatorViewResult />
        </Fragment>
    );
};

BranchesLocatorContainer.defaultProps = {
    response: null,
    loading: false,
    error: false,
    fetchBranchesLocator: () => console.error("wasn't implement function fetchBranchesLocator"),
    branchesLocatorClear: () => console.error("wasn't implement function branchesLocatorClear")
};

BranchesLocatorContainer.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    fetchBranchesLocator: PropTypes.func,
    branchesLocatorClear: PropTypes.func
};

const mapStateToProps = ({branches_locator}, ownProps) => {
    const {loading, error, response} = branches_locator;
    return {
        loading,
        error,
        response
    };
}

const mapDispachToProps = (dispatch, ownProps) => {
    const {justinService} = ownProps;
    return {
        fetchBranchesLocator: fetchBranchesLocator(justinService, dispatch),
        branchesLocatorClear: () => dispatch(branchesLocatorClear())
    };
}

export default compose(
    withJustinService(),
    connect(mapStateToProps, mapDispachToProps)
)(BranchesLocatorContainer);

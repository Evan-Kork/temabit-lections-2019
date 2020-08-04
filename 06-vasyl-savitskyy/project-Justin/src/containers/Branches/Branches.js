import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";

import {withJustinService} from "../../components/Hoc";
import {
    fetchBranches,
    branchesClear
} from "../../actions";
import BranchesControls from "../../components/Branches/Controls";
import BranchesViewResult from "../../components/Branches/ViewResult";

function BranchesContainer(props) {
    const {number} = props.match.params;
    const urlParams = new URLSearchParams(props.location.search);
    const locality = urlParams.get("locality");

    useEffect(() => {
        if (typeof number !== "undefined") {
            props.fetchBranches(`/${number}`);
        } else if (locality !== null) {
            props.fetchBranches(`?locality=${locality}`);
        } else {
            props.fetchBranches();
        }

    }, [number, locality]);

     /** componentWillUnmount */
     useEffect(() => {
        return () => {
            props.branchesClear();
        }
    },[]);

    const allClear = () => {
        props.branchesClear();
    }
    
    return (
        <Fragment>
            <h1 className="w-100 text-center">
                Наші відділення (поштомаркети)
            </h1>

            <BranchesControls allClear={allClear} />

            {props.loading ? <h2 className="w-100 text-center">Завантаження даних . . .</h2> : null}

            <BranchesViewResult />
        </Fragment>
    );
};

BranchesContainer.defaultProps = {
    loading: false,
    error: false,
    fetchBranches: () => console.error("wasn't implement function fetchBranches"),
    branchesClear: () => console.error("wasn't implement function branchesClear")
};

BranchesContainer.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    fetchBranches: PropTypes.func,
    branchesClear: PropTypes.func
};

const mapStateToProps = ({branches}, ownProps) => {
    const {loading, error} = branches;
    return {
        loading,
        error
    };
}

const mapDispachToProps = (dispatch, ownProps) => {
    const {justinService} = ownProps;
    return {
        fetchBranches: fetchBranches(justinService, dispatch),
        branchesClear: () => dispatch(branchesClear())
    };
}

export default compose(
    withJustinService(),
    connect(mapStateToProps, mapDispachToProps)
)(BranchesContainer);

import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";

import {withJustinService} from "../../Hoc";
import {
    fetchBranchesLocator,
    branchesLocatorClear
} from "../../../actions";
import Modal from "../../UI/Modal";
import TableBranches from "../../UI/Table/Branches";

const ModalBranchesLocator = (props) => {
    const closeModal = () => {
        if (props.loading) return;

        props.handleModal(!props.show);
    }

    useEffect(() => {
        if (props.show) {
            props.fetchBranchesLocator(`/${props.location}`);
        }
    }, [props.show]);

    /** componentWillUnmount */
    useEffect(() => {
        return () => {
            props.branchesLocatorClear();
        }
    },[]);

    return (
        <Fragment>
            {props.show
                ? <Modal
                    close={closeModal}
                >
                    {props.loading ? <h2 className="w-100 text-center">Завантаження даних . . .</h2> : null}
                    
                    {props.response
                        ? (<div className="branches_locator">
                            <h3>Населений пункт: {props.location}</h3>

                            <TableBranches items={props.itemsForView} />
                        </div>)
                        : null
                    }
                </Modal>
                : null
            }
        </Fragment>
    );
};

ModalBranchesLocator.defaultProps = {
    location: null,
    show: false,
    loading: false,
    error: false,
    response: null,
    itemsForView:[],
    fetchBranchesLocator: () => console.error("wasn't implement function fetchBranchesLocator"),
    branchesLocatorClear: () => console.error("wasn't implement function branchesLocatorClear")
};

ModalBranchesLocator.propTypes = {
    location: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]),
    show: PropTypes.bool,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    response: PropTypes.object,
    itemsForView: PropTypes.array,
    fetchBranchesLocator: PropTypes.func,
    branchesLocatorClear: PropTypes.func
};

const mapStateToProps = ({branches_locator}, ownProps) => {
    const {loading, error, response, itemsForView} = branches_locator;
    return {
        loading,
        error,
        response,
        itemsForView
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
)(ModalBranchesLocator);
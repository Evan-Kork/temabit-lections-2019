import "./style.scss";

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";

import {withJustinService} from "../../Hoc";
import {
    fetchBranchTypes,
    branchTypesClear
} from "../../../actions";
import Modal from "../../UI/Modal";

const ModalBranchTypes = (props) => {
    const closeModal = () => {
        props.handleModal(!props.show);
        props.branchTypesClear();
    }

    const renderButton = () => {
        return (
            <button
                onClick={() => props.handleModal(!props.show)}
                onMouseDown={() => props.fetchBranchTypes()}
                onTouchStart={() => props.fetchBranchTypes()}
                className="w-75 btn btn-justin"
                title="Інформація про типи відділень"
            >
                <span className="mr-3">Типи відділень</span>
                {props.loading ?
                    (<div className="spinner-border spinner-border-sm" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>)
                    : null}
            </button>
        );
    }

    const renderInfo = (list) => {
        const renderTableBody = () => {
            return (
                <Fragment>
                    {list.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.short_name}</td>
                                <td>{item.description}</td>
                            </tr>
                        )
                    })}
                </Fragment>
            );
        }
        return (
            <div className="container-fluid mt-4">
                <table className="table table-sm table-striped">
                    <caption>Інформація про типи відділень</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Назва</th>
                            <th scope="col">Роз'яснення</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableBody()}
                    </tbody>
                </table>
            </div>
        );
    }
    
    return (
        <Fragment>
            {renderButton()}

            {props.show && props.response !== null ?
                <Modal
                    close={closeModal}
                >
                    {renderInfo(props.response.result)}
                </Modal>
                : null
            }
        </Fragment>
    );
};

ModalBranchTypes.defaultProps = {
    loading: false,
    error: false,
    response: null,
    fetchBranchTypes: () => console.error("wasn't implement function fetchBranchTypes"),
    branchTypesClear: () => console.error("wasn't implement function branchTypesClear")
};

ModalBranchTypes.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    response: PropTypes.object,
    fetchBranchTypes: PropTypes.func,
    branchTypesClear: PropTypes.func
};

const mapStateToProps = ({branch_types}, ownProps) => {
    const {loading, error, response} = branch_types;
    return {
        loading,
        error,
        response
    };
}

const mapDispachToProps = (dispatch, ownProps) => {
    const {justinService} = ownProps;
    return {
        fetchBranchTypes: fetchBranchTypes(justinService, dispatch),
        branchTypesClear: () => dispatch(branchTypesClear())
    };
}

export default compose(
    withJustinService(),
    connect(mapStateToProps, mapDispachToProps)
)(ModalBranchTypes);

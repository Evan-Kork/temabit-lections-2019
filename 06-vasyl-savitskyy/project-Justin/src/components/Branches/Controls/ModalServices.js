import "./style.scss";

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";

import {withJustinService} from "../../Hoc";
import {
    fetchServices,
    servicesClear
} from "../../../actions";
import Modal from "../../UI/Modal";

const ModalServices = (props) => {
    const closeModal = () => {
        props.handleModal(!props.show);
        props.servicesClear();
    }

    const renderButton = () => {
        return (
            <button
                onClick={() => props.handleModal(!props.show)}
                onMouseDown={() => props.fetchServices()}
                onTouchStart={() => props.fetchServices()}
                className="w-75 btn btn-justin"
                title="Інформація про доступні сервіси"
            >
                <span className="mr-3">Доступні сервіси</span>
                {props.loading ?
                    (<div className="spinner-border spinner-border-sm" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>)
                    : null}
            </button>
        );
    }

    const renderInfo = (list) => {
        const newList = [];
        for (const i in list) {
            for (const k in list[i]) {
                newList.push(list[i][k]);
            }
        }
        const renderTableBody = () => {
            return (
                <Fragment>
                    {newList.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name_ua}</td>
                                <td>{item.description_ua}</td>
                            </tr>
                        )
                    })}
                </Fragment>
            );
        }
        return (
            <div className="container-fluid mt-4">
                <table className="table table-sm table-striped">
                    <caption>Інформація про доступні сервіси</caption>
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

ModalServices.defaultProps = {
    show: false,
    loading: false,
    error: false,
    response: null,
    fetchServices: () => console.error("wasn't implement function fetchServices"),
    servicesClear: () => console.error("wasn't implement function servicesClear")
};

ModalServices.propTypes = {
    show: PropTypes.bool,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    response: PropTypes.object,
    fetchServices: PropTypes.func,
    servicesClear: PropTypes.func
};

const mapStateToProps = ({services}, ownProps) => {
    const {loading, error, response} = services;
    return {
        loading,
        error,
        response
    };
}

const mapDispachToProps = (dispatch, ownProps) => {
    const {justinService} = ownProps;
    return {
        fetchServices: fetchServices(justinService, dispatch),
        servicesClear: () => dispatch(servicesClear())
    };
}

export default compose(
    withJustinService(),
    connect(mapStateToProps, mapDispachToProps)
)(ModalServices);

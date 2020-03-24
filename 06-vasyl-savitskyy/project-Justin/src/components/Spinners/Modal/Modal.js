import "./style.css";

import React from 'react';
import { connect } from 'react-redux';

const ModalSpinner = ({ b_l, t_l, t_h_l, l_l, b_l_l }) => {

    if (b_l || t_l || t_h_l || l_l || b_l_l)
        return (<div className="modal-spinner d-flex align-items-center justify-content-center">
                    <div className="modal-under-order d-flex justify-content-center align-items-center">
                        <div className="lds-css ng-scope">
                            <div className="lds-spinner">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>);

    return null;
}

const mapStateToProps = ({branches, tracking, tracking_history, localities, branches_locator}) => {
    const {loading: b_l} = branches;
    const {loading: t_l} = tracking;
    const {loading: t_h_l} = tracking_history;
    const {loading: l_l} = localities;
    const {loading: b_l_l} = branches_locator;
    return {
        b_l,
        t_l,
        t_h_l,
        l_l,
        b_l_l
    };
};

export default connect(mapStateToProps)(ModalSpinner);

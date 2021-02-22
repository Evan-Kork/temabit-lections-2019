import React from 'react';

import './style/style-form-history-traking.scss';
import '@fortawesome/fontawesome-free/js/all.min.js';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { getTrakingInfo } from '../../../actions/actionTracking';


class FormHistoryTraking extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            departmentPlaceholder: 'Введіть номер відправлення',
        }
    }

    handleSubmitTrack = (event) => {
        event.preventDefault();
        if(event.target.children.ttn_number.value){
            this.props.getDataTrakingInfo(`/tracking_history/${event.target.children.ttn_number.value}`);
            this.props.history.push(`/tracking/?ttn_number=${event.target.children.ttn_number.value}`);
        }
    }
    
    render(){
        return (
            <div className="box-form-track">
                <div className="title-traking-form">
                    Пошук може проводитись по номеру замовлення, номеру ТТН або номеру замовлення клієнта
                </div>
                <form className="search-package" onSubmit={this.handleSubmitTrack}>
                    <input name="ttn_number" placeholder={this.state.departmentPlaceholder}/>
                    <button type="submit" className="track-package"><i className="fas fa-search"></i></button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    tracking: state.tracking,
});
const mapDispatchToProps = dispatch => ({
    getDataTrakingInfo: url => dispatch(getTrakingInfo(url)),
});
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(FormHistoryTraking);
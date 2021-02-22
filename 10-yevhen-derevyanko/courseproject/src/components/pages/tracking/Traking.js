import React from 'react';

import './style/style-traking.scss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { getTrakingInfo } from '../../../actions/actionTracking';
import TitlePage from '../../sections/title-page/Title-page';
import ListHistoryTraking from '../../sections/list-history-tracking/List-history-traking';
import FormHistoryTraking from '../../sections/form-history-tracking/Form-history-traking';

class Traking extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titlePage: 'Трекер посилки',
        };
    }
    componentDidMount() {
        if(this.props.location.search){
            let getParamTtn = this.props.location.search.split('?ttn_number=')[1];
            if(getParamTtn !== this.props.tracking.ttn_number){
                this.props.getDataTrakingInfo(`/tracking_history/${getParamTtn}`);
            }
        }
       // 201810165 
    }
    render(){
        return (
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <TitlePage title={this.state.titlePage}/>
                            <div className="line line-track">
                                {this.props.tracking.trakingInfo !== null && <ListHistoryTraking dataTrakInfo={this.props.tracking}/>}
                                <FormHistoryTraking />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
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
)(Traking);
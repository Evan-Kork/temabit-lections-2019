import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import AsideNav from '../sections/aside-nav/AsideNav';

import { connect } from 'react-redux';
import { compose } from 'redux'
import { actionAsside } from '../../actions/actionAsside';
import { getTrakingInfo } from '../../actions/actionTracking';

import './style/header-style.scss';

import logo from './img/logo.png';
import reginPost from './img/Knopka_Mignarodna_DOSTAVKA.png';
import loginCabinet from './img/KABINET.png';



class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            departmentPlaceholder: 'Введіть номер відправлення',
            contactPhone: '0-800-301-661',
        }
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            this.props.actionAsside('hidden');
        });
    }
    componentWillUnmount() {
        this.unlisten();
    }


    showAssideNavigation = () => {
        if(this.props.assideStatus === 'hidden'){
            this.props.actionAsside('show');
        }else{
            this.props.actionAsside('hidden');
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(event.target.children[0].value){
            this.props.getDataTrakingInfo(`/tracking_history/${event.target.children[0].value}`);
            this.props.history.push(`/tracking/?ttn_number=${event.target.children[0].value}`);
            event.target.children[0].value = '';
        }
    }
    render(){
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="line line-header">
                                <NavLink to='/' className="site-logo"><img src={logo} alt="logo" /></NavLink>
                                <nav>
                                    <ul>
                                        <li><a href="https://international.justin.ua/" rel="noopener noreferrer"><img src={reginPost}  alt=""/></a></li>
                                        <li><a href="https://my.justin.ua/login"><img src={loginCabinet} rel="noopener noreferrer" alt=""/></a></li>
                                    </ul>
                                </nav>
                                <div className="line line-search-department">
                                    <a className="contact-phone" href={`tel:${this.state.contactPhone}`} >{this.state.contactPhone}</a>
                                    <form className="search-department" onSubmit={this.handleSubmit}>
                                        <input name="ttn_number" placeholder={this.state.departmentPlaceholder}/>
                                    </form>
                                </div>
                                <button type="button" className="show-aside-nav" onClick={this.showAssideNavigation}><span></span><span></span><span></span></button>
                            </div>
                        </div>
                    </div>
                </div>
              <AsideNav assideStatus={this.props.assideStatus}/>
            </header>
        );
    }
}
const mapStateToProps = state => ({
    assideStatus: state.assideStatus,
    tracking: state.tracking,
});
const mapDispatchToProps = dispatch => ({
    actionAsside: status => dispatch(actionAsside(status)),
    getDataTrakingInfo: url => dispatch(getTrakingInfo(url)),
});
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Header);
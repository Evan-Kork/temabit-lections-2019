import React from 'react';
import { NavLink } from "react-router-dom";
import './style/style-our-services.scss';
import '@fortawesome/fontawesome-free/js/all.min.js';

class OurOffices extends React.Component{
    render(){
        let dataService = this.props.dataService;
        function createHtmlIcon() {
            return {__html: dataService.icon};
        }

        return (
            <div className="box-services box-offices">
                <div className="content">
                    <div className="icon icon-location" dangerouslySetInnerHTML={createHtmlIcon()}/>
                    <div className="title">{dataService.title}</div>
                    <NavLink to={dataService.linkUrl} className="go-services">{dataService.linkTitle}</NavLink>
                </div>    
            </div>
        )
    }
}
export default OurOffices;
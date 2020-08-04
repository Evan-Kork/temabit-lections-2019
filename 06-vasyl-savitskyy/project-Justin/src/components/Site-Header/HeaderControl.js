import React from "react";
import PropTypes from "prop-types";

import LogoLink from "./LogoLink";
import SearchTrackingInput from "../Search/Tracking/Input";
import MenuHeaderBtn from "../Menu/HeaderBtn";

const HeaderControl = (props) => {

    return (
        <div className="col order-1 order-lg-2 d-flex justify-content-between align-items-center mb-2 mb-lg-0" >
            <span className="d-lg-none">
                <LogoLink />
            </span>
            <span className="justin_phone">
                <a 
                    className="__link"
                    href="tel:0-800-301-661"
                >
                    <span className="d-none d-md-block">0-800-301-661</span>
                    <i className="fa fa-phone d-block d-md-none" />
                </a>
            </span>
            <SearchTrackingInput {...props} />
            <MenuHeaderBtn menu={props.menu} handleMenu={props.handleMenu} />
        </div>
    );
};

HeaderControl.defaultProps = {
    menu: false,
    handleMenu: () => console.error("wasn't implement function handleMenu")
};

HeaderControl.propTypes = {
    menu: PropTypes.bool,
    handleMenu: PropTypes.func
};

export default HeaderControl;

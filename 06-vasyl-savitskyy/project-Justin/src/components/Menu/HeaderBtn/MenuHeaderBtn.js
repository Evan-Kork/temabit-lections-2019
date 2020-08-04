import "./style.scss";

import React from "react";
import PropTypes from "prop-types";

const MenuHeaderBtn = (props) => {

    return (
        <div className="wrapper_menu_btn"
            onClick={props.handleMenu}
        >
            <i className="fas fa-bars" />
        </div>
    );
};

MenuHeaderBtn.defaultProps = {
    handleMenu: () => console.error("wasn't implement function handleMenu")
};

MenuHeaderBtn.propTypes = {
    handleMenu: PropTypes.func
};

export default MenuHeaderBtn;

import "./style.scss";

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {rootHref} from "../../../../config/core";
import {
    acceptCookies
} from "../../../../actions";

const CookiesBar = (props) => {
    const renderCookiesBar = (bool) => {
        if (!bool) {
            return (
                <div className="p-4 row ml-0 mr-0 cookies_bar">
                    <div className="col-12 col-md-10">
                        <span>
                            Ми використовуємо файли cookies для максимальної зручності користувачів. Перебуваючи на нашому сайті, ви приймаєте
                            <Link
                                className="ml-2 text-white"
                                to={`${rootHref}poryadok-vykorystannya-konfidentsijnoyi-informatsiyi`}
                            >правила використання файлів cookies</Link>
                        </span>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <button
                            className="btn btn_accept_cookies"
                            onClick={props.acceptCookies}
                        >Погоджуюся</button>
                    </div>
                </div>
            );
        }

        return null;
    }

    return renderCookiesBar(props.isCookies);
};

CookiesBar.defaultProps = {
    acceptCookies: () => console.error("wasn't implement function acceptCookies"),
    isCookies: false
};

CookiesBar.propTypes = {
    acceptCookies: PropTypes.func,
    isCookies: PropTypes.bool
};

const mapStateToProps = ({setting}) => {
    const {isCookies} = setting;
    return {
        isCookies
    };
}

const mapDispachToProps = (dispatch, ownProps) => {
    return {
        acceptCookies: () => dispatch(acceptCookies())
    };
}

export default connect(mapStateToProps, mapDispachToProps)(CookiesBar);

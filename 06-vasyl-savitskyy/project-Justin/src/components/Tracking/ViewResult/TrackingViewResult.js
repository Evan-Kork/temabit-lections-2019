import "./style.scss";

import React, { Fragment } from "react";
import PropTypes from "prop-types";

import RenderAnswer from "./RenderAnswer";

const TrackingViewResult = (props) => {

    return (
        <div className="d-flex justify-content-center tracking_response">
            {(props.data !== null && props.data.result)
                ? (<div className="col-3 text-center">
                        <RenderAnswer item={props.data.result[0]} />
                    </div>)
                : props.data !== null && props.data.msg.code === 10304
                    ? <h6 className="w-100 text-center">{props.data.msg.ua}</h6>
                    : null
            }
        </div>
    );
}

TrackingViewResult.defaultProps = {
    data: null,
    number: ''
};

TrackingViewResult.propTypes = {
    data: PropTypes.object,
    number: PropTypes.string
};

export default TrackingViewResult;

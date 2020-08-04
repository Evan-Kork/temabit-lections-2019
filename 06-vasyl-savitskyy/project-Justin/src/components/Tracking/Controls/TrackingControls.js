import "./style.scss";

import React from "react";
import PropTypes from "prop-types";

const TrackingControls = (props) => {
    return (
        <div className="input-group mb-3 justify-content-center">
            <input
                type="test"
                name="ttn_number"
                className=""
                onChange={e => props.onChange(e)}
                placeholder="Введіть номер відправлення"
                autoComplete="off"
                value={props.value}
            />
        </div>
    );
}

TrackingControls.defaultProps = {
    value: "",
    onChange: (e) => console.error("wasn't implement function onChange: ", e),
};

TrackingControls.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default TrackingControls;

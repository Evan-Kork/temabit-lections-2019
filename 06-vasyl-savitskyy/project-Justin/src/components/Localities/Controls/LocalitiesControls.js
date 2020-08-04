import "./style.scss";

import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


import {
    toggleRegionLocalities
} from "../../../actions";
import {rootHref} from "../../../config/core";

function LocalitiesControls(props) {
    const optionList = props.regionList.map((item, idx) => {
        return (
            <option key={idx}>
                {item}
            </option>
        )
    })
  
    return (
        <div className="row localities_controls">
            <div className="col-12 col-md-6">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text">Область</label>
                    </div>
                    <select
                        className="custom-select"
                        onChange={(e) => props.toggleRegionLocalities(e.target.value)}
                        value={props.region}
                        disabled={props.regionList.length ? false : true}
                    >
                        {optionList}
                    </select>
                </div>
            </div>

            <div className="col">
                <div className="input-group-append d-flex justify-content-end">
                    <Link
                        to={`${rootHref}localities/all`}
                        onClick={props.allClear}
                        className={`w-50 btn btn-justin ${props.str === "all" ? "disabled" : ""}`}
                        type="submit"
                    >Всі</Link>
                </div>

                <div className="mt-3 input-group-append d-flex justify-content-end">
                    <Link
                        to={`${rootHref}localities/activity`}
                        onClick={props.allClear}
                        className={`w-50 btn btn-justin ${props.str === "activity" ? "disabled" : ""}`}
                        type="submit"
                    >Активні</Link>
                </div>
            </div>
        </div>
    );
};

LocalitiesControls.defaultProps = {
    region: '',
    regionList: [],
    str: "all",
    allClear: () => console.error("wasn't implement function allClear"),
    toggleRegionLocalities: () => console.error("wasn't implement function toggleRegionLocalities")
};

LocalitiesControls.propTypes = {
    region: PropTypes.string,
    regionList: PropTypes.array,
    str: PropTypes.string,
    allClear: PropTypes.func,
    toggleRegionLocalities: PropTypes.func
};

const mapStateToProps = ({localities}) => {
    const {regionsMap, region} = localities;
    return {
        regionList: Array.from(regionsMap.keys()),
        region
    };
}

const mapDispachToProps = (dispatch) => {
    return {
        toggleRegionLocalities: str => dispatch(toggleRegionLocalities(str))
    };
}

export default connect(mapStateToProps, mapDispachToProps)(LocalitiesControls);

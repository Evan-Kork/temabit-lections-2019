import "./style.scss";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {rootHref} from "../../../config/core";
import {combiteParametersThroughComma} from "../../../utils";

const BranchesLocatorControls = (props) => {
    const {address} = props.match.params;
    const [locality, setLocality] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');

    useEffect(() => {
        if (typeof address === "undefined") {
            allClear();
        }
    }, [address]);

    const allClear = () => {
        if (typeof address !== "undefined" || locality !== "" || street !== "" || number !== "") {
            setLocality("");
            setStreet("");
            setNumber("");
        }
        props.allClear();
    }
    
    return (
        <div className="row branches_locator_controls">
            <div className="col-12 col-md-7">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text">Місцевість:</label>
                    </div>
                    <input
                        type="text"
                        name="locality"
                        autoComplete="off"
                        placeholder="Горішні Плавні"
                        value={locality}
                        onChange={e => setLocality(e.target.value)}
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text">Вулиця:</label>
                    </div>
                    <input
                        type="text"
                        name="street"
                        autoComplete="off"
                        placeholder="Молодіжна"
                        value={street}
                        onChange={e => setStreet(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text">№ будинку:</label>
                    </div>
                    <input
                        type="number"
                        name="number"
                        autoComplete="off"
                        placeholder="10"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                </div>
            </div>

            <div className="col">
                <div className="input-group mb-3 justify-content-end">
                    <Link
                        className="w-75 btn btn-justin"
                        to={`${rootHref}branches_locator${combiteParametersThroughComma(locality,street,number)}`}
                    >Отримати дані</Link>
                </div>

                <div className="input-group mb-3 justify-content-end">
                    <button
                        onClick={allClear}
                        className="w-75 btn btn-justin"
                        title="Очистити дані"
                    >
                        Очистити
                    </button>
                </div>
            </div>
        </div>
    );
};

BranchesLocatorControls.defaultProps = {
    allClear: () => console.error("wasn't implement function allClear"),
};

BranchesLocatorControls.propTypes = {
    allClear: PropTypes.func,
};

export default BranchesLocatorControls;

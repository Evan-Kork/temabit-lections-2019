import "./style.scss";

import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {useDebouncedCallback} from "use-debounce";

import {rootHref} from "../../../config/core";
import {
    searchBranches
} from "../../../actions";
import {DEBOUNCED_SEARCH_WAIT} from "../../../config/core";
import {INITIAL_SEARCH} from "../../../CONST";
import ModalBranchTypes from "./ModalBranchTypes";
import ModalServices from "./ModalServices";

const BranchesControls = (props) => {
    const [showBranchTypes, setShowBranchTypes] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const refSearchInput = useRef(props.search);
    const [number, setNumber] = useState("");
    const [locality, setLocality] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [debouncedFunction] = useDebouncedCallback(str => {
        props.searchBranches(str);
      }, DEBOUNCED_SEARCH_WAIT);

    const allClear = () => {
        if (props.response !== null
            && props.response.result !== null
            && number === ""
            && locality === ""
            && props.search === INITIAL_SEARCH) {
                props.allClear();
        }
        
        clearInputs();
    }

    const clearInputs = () => {
        setNumber("");
        setLocality("");
        props.searchBranches(INITIAL_SEARCH);
        refSearchInput.current.value = INITIAL_SEARCH;
    }

    useEffect(() => {
        if ((props.response !== null && props.response.result !== null)
            || number !== ""
            || locality !== ""
            || props.search !== INITIAL_SEARCH) {
                setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }, [props.response, number, locality, props.search]);
    
    return (
        <div className="row branches_controls">
            <div className="col-12 col-md-7">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Номер відділення"
                        onChange={e => setNumber(e.target.value)}
                        value={number}
                    />
                    <div className="input-group-append">
                        <Link
                            to={`${rootHref}branches/${number}`}
                            onClick={clearInputs}
                            className={`btn btn-justin ${number === "" ? "disabled" : ""}`}
                            type="submit"
                        >Примінити</Link>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Населений пункт"
                        onChange={e => setLocality(e.target.value)}
                        value={locality}
                    />
                    <div className="input-group-append">
                        <Link
                            to={`${rootHref}branches?locality=${locality}`}
                            onClick={clearInputs}
                            className={`btn btn-justin ${locality === "" ? "disabled" : ""}`}
                            type="submit"
                        >Примінити</Link>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <input
                        type="text" 
                        className="form-control"
                        placeholder="Пошук за ..."
                        ref={refSearchInput}
                        disabled={props.response === null || props.response.result === null}
                        onChange={e => debouncedFunction(e.target.value)}
                        defaultValue={props.search}
                    />
                </div>
            </div>

            <div className="col">
                <div className="input-group mb-3 justify-content-end">
                    <Link
                        to={`${rootHref}viddilennya`}
                        className="w-75 btn btn-justin"
                        title="Карта відділень"
                    >Карта відділень</Link>
                </div>

                <div className="input-group mb-3 justify-content-end">
                    <ModalBranchTypes handleModal={setShowBranchTypes} show={showBranchTypes} />
                </div>

                <div className="input-group mb-3 justify-content-end">
                    <ModalServices handleModal={setShowServices} show={showServices} />
                </div>

                <div className="input-group mb-3 justify-content-end">
                    {props.countItems
                        ? <span className="count_items"><b>К-ть: {props.countItems}</b></span>
                        : null
                    }
                    <button
                        onClick={allClear}
                        className="w-75 btn btn-justin"
                        title="Очистити дані"
                        disabled={btnDisabled ? "disabled" : ""}
                    >
                        Очистити
                    </button>
                </div>
            </div>
        </div>
    );
};

BranchesControls.defaultProps = {
    data: null,
    search: INITIAL_SEARCH,
    countItems: null,
    searchBranches: () => console.error("wasn't implement function searchBranches"),
    allClear: () => console.error("wasn't implement function allClear"),
};

BranchesControls.propTypes = {
    allClear: PropTypes.func,
    searchBranches: PropTypes.func,
    data: PropTypes.object,
    countItems: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
    ])
};

const mapStateToProps = ({branches}) => {
    const {response, search, countItems} = branches;
    return {
        response,
        search,
        countItems
    };
}

const mapDispachToProps = (dispatch) => {
    return {
        searchBranches: str => dispatch(searchBranches(str))
    };
}

export default connect(mapStateToProps, mapDispachToProps)(BranchesControls);

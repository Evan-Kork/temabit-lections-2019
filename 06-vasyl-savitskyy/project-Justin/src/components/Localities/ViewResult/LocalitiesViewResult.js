import "./style.scss";

import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {
    INITIAL_COUNT_ON_PAGE
} from "../../../CONST";
import { getPageMap } from "../../../utils"
import Pagination from "../../UI/Pagination";
import ModalBranchesLocator from "./ModalBranchesLocator";

const LocalitiesViewResult = (props) => {
    const [showBranchesLocator, setShowBranchesLocator] = useState(false);
    const [location, setLocation] = useState(null);
    const handleLocation = (str) => {
        setShowBranchesLocator(true);
        setLocation(str);
    }
    const [page, setPage] = useState(1);
    useEffect(() => {
        setPage(1);
    }, [props.listMap]);

    const onChangePage = (num) => {
        setPage(num);
    };

    const items = props.listMap.get(page);
    return (
        <div className="mt-5 row localities_content">
            {(typeof items !== "undefined" && items !== null && items.length)
                ? (<Fragment>
                    <div
                        className="w-100 table_block"
                    >
                        {showBranchesLocator
                            ? <ModalBranchesLocator
                                show={showBranchesLocator}
                                handleModal={setShowBranchesLocator}
                                location={location}
                            />
                            : null
                        }

                        <table className="table table-bordered table-striped branches_table">
                            <thead>
                                <tr>
                                    <th className="column_1">#</th>
                                    <th className="column_2">Населений пункт</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index}
                                            className="active_item"
                                            onClick={() => handleLocation(item.title_ua)}
                                        >
                                            <td className="column_1">{(index+1) + ((page-1)*INITIAL_COUNT_ON_PAGE)}</td>
                                            <td className="column_3">{item.title_ua}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    {props.countPages !== null
                        ? <Pagination
                            onChangePage={onChangePage}
                            activePage={page}
                            countPages={props.countPages}
                        />
                        : null}
                </Fragment>)
                : <h2 className="w-100 text-center">
                    Дані відсутні
                </h2>
            }
        </div>
    );
}

LocalitiesViewResult.defaultProps = {
    items: null,
};

LocalitiesViewResult.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ])
};

const mapStateToProps = ({localities}) => {
    const {regionsMap, region} = localities;
    const [map, count] = getPageMap(regionsMap.get(region), INITIAL_COUNT_ON_PAGE);
    return {
        listMap: map,
        countPages: count
    };
}

const mapDispachToProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispachToProps)(LocalitiesViewResult);

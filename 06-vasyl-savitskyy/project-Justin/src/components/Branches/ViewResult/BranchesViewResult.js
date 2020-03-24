import "./style.scss";

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";
import {Link} from "react-router-dom";

import {withJustinService} from "../../Hoc";
import {
    fetchBranches,
    togglePageBranches
} from "../../../actions";
import Pagination from "../../UI/Pagination";
import {rootHref} from "../../../config/core";
import TableBranches from "../../UI/Table/Branches";

const BranchesViewResult = (props) => {

    return (
        <div className="row">
            {(typeof props.items !== "undefined" && props.items !== null && props.items.length)
                ? (<Fragment>
                    <TableBranches items={props.items} />
                    {props.countPages !== null
                        ? <Pagination
                            onChangePage={props.togglePageBranches}
                            activePage={props.activePage}
                            countPages={props.countPages}
                        />
                        : null}
                </Fragment>)
                : props.items === null
                    ? (<h2 className="w-100 text-center">
                        {props.response.msg.ua}
                    </h2>)
                    : (<Fragment>
                        <h2 className="w-100 text-center">
                            Дані відсутні
                        </h2>
                        {props.loading ? null
                            :( <div className="w-100 input-group-append justify-content-center">
                                <Link
                                    to={`${rootHref}branches`}
                                    onClick={() => props.fetchBranches()}
                                    className="btn btn-justin"
                                >Список відділень</Link>
                            </div>)
                        }
                    </Fragment>)
            }
        </div>
    );
};

BranchesViewResult.defaultProps = {
    response: null,
    loading: false,
    items: [],
    countPages: null,
    activePage: 1,
    fetchBranches: () => console.error("wasn't implement function fetchBranches"),
};

BranchesViewResult.propTypes = {
    response: PropTypes.object,
    loading: PropTypes.bool,
    items: PropTypes.array,
    countPages: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
    ]),
    activePage: PropTypes.number,
    fetchBranches: PropTypes.func,
};

const mapStateToProps = ({branches}) => {
    const {response, loading, pageMap, activePage, countPages} = branches;
    // console.log({searchMap, pageMap, countPages, activePage, countPages});
    return {
        response,
        loading,
        items: pageMap.get(activePage),
        countPages,
        activePage
    };
}

const mapDispachToProps = (dispatch, ownProps) => {
    const {justinService} = ownProps;
    return {
        fetchBranches: fetchBranches(justinService, dispatch),
        togglePageBranches: num => dispatch(togglePageBranches(num))
    };
}

export default compose(
    withJustinService(),
    connect(mapStateToProps, mapDispachToProps)
)(BranchesViewResult);

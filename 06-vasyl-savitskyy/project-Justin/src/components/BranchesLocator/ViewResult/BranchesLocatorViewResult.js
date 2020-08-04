import "./style.scss";

import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import TableBranches from "../../UI/Table/Branches";

const BranchesLocatorViewResult = (props) => {

    return (
        <div className="row">
            {(typeof props.itemsForView !== "undefined" && props.itemsForView !== null && props.itemsForView.length)
                ? <TableBranches items={props.itemsForView} />
                : props.items === null
                    ? (<h2 className="w-100 text-center">
                        {props.response.msg.ua}
                    </h2>)
                    : <h2 className="w-100 text-center">Дані відсутні</h2>
            }
        </div>
    );
};

BranchesLocatorViewResult.defaultProps = {
    response: null,
    loading: false,
    itemsForView: [],
};

BranchesLocatorViewResult.propTypes = {
    response: PropTypes.object,
    loading: PropTypes.bool,
    itemsForView: PropTypes.array,
    countPages: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
    ])
};

const mapStateToProps = ({branches_locator}) => {
    const {response, itemsForView, loading} = branches_locator;
    return {
        response,
        loading,
        itemsForView
    };
}

export default connect(mapStateToProps)(BranchesLocatorViewResult);

import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";

import {withJustinService} from "../../components/Hoc";
import {
    localitiesClear,
    fetchLocalities
} from "../../actions";
import LocalitiesControls from "../../components/Localities/Controls";
import LocalitiesViewResult from "../../components/Localities/ViewResult";

function LocalitiesContainer(props) {
    const {str} = props.match.params;

    useEffect(() => {
        if (props.response === null) {
            props.fetchLocalities(`/${str}`);
        }
    }, [props.response]);
  
       /** componentWillUnmount */
       useEffect(() => {
          return () => {
              allClear();
          }
      },[]);
  
      const allClear = () => {
          props.localitiesClear();
      }
  
    return (
        <Fragment>
            <h1 className="w-100 text-center">
                Населенні пункти
            </h1>

            <LocalitiesControls allClear={allClear} str={str} />

            {props.loading ? <h2 className="w-100 text-center">Завантаження даних . . .</h2> : null}

            <LocalitiesViewResult />
        </Fragment>
    );
};

LocalitiesContainer.defaultProps = {
    loading: false,
    error: false,
    response: null,
    fetchLocalities: () => console.error("wasn't implement function fetchLocalities"),
    localitiesClear: () => console.error("wasn't implement function localitiesClear")
};

LocalitiesContainer.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    response: PropTypes.object,
    fetchLocalities: PropTypes.func,
    localitiesClear: PropTypes.func
};

const mapStateToProps = ({localities}, ownProps) => {
    const {loading, error, response} = localities;
    return {
        loading,
        error,
        response
    };
}

const mapDispachToProps = (dispatch, ownProps) => {
    const {justinService} = ownProps;
    return {
        fetchLocalities: fetchLocalities(justinService, dispatch),
        localitiesClear: () => dispatch(localitiesClear())
    };
}

export default compose(
    withJustinService(),
    connect(mapStateToProps, mapDispachToProps)
)(LocalitiesContainer);

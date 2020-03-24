import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";
import {useDebouncedCallback} from "use-debounce";

import {withJustinService} from "../../components/Hoc";
import {
    trackingClear,
    fetchTracking
} from "../../actions";
import {DEBOUNCED_SEARCH_WAIT, rootHref} from "../../config/core";
import TrackingControls from "../../components/Tracking/Controls";
import TrackingViewResult from "../../components/Tracking/ViewResult";

function TrackingContainer(props) {
    const {number} = props.match.params;
    const [input, setInput] = useState(number);

    useEffect(() => {
        if (props.response === null) {
            props.fetchTracking(`/${number}`);
        } else {
            setInput(number);
        }
    }, [number]);

    const hundleInput = e => {
        setInput(e.target.value);
        debouncedFunction(encodeURI(e.target.value));
    };

    const [debouncedFunction] = useDebouncedCallback(str => {
        if (!str.length) return;

        props.fetchTracking(
            `/${str}`,
            () => {
                props.history.push(`${rootHref}tracking/${str}`);
            },
            () => console.log("modal error tracking number!")
        );
      }, DEBOUNCED_SEARCH_WAIT);
  
       /** componentWillUnmount */
       useEffect(() => {
          return () => {
              allClear();
          }
      },[]);
  
      const allClear = () => {
          props.trackingClear();
      }
  
    return (
        <Fragment>
            <h1 className="w-100 text-center">
                Трекер посилки
            </h1>

            <div className="tracking_content">
                <TrackingControls value={input} onChange={hundleInput} number={number} />

                {props.loading ? <h2 className="w-100 text-center">Завантаження даних . . .</h2> : null}

                <TrackingViewResult data={props.response} />
            </div>
        </Fragment>
    );
};

TrackingContainer.defaultProps = {
    loading: false,
    error: false,
    response: null,
    fetchTracking: () => console.error("wasn't implement function fetchTracking"),
    trackingClear: () => console.error("wasn't implement function trackingClear")
};

TrackingContainer.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    response: PropTypes.object,
    fetchTracking: PropTypes.func,
    trackingClear: PropTypes.func
};

const mapStateToProps = ({tracking}, ownProps) => {
    const {loading, error, response} = tracking;
    return {
        loading,
        error,
        response
    };
}

const mapDispachToProps = (dispatch, ownProps) => {
    const {justinService} = ownProps;
    return {
        fetchTracking: fetchTracking(justinService, dispatch),
        trackingClear: () => dispatch(trackingClear())
    };
}

export default compose(
    withJustinService(),
    connect(mapStateToProps, mapDispachToProps)
)(TrackingContainer);

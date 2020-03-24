import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";
import {useDebouncedCallback} from "use-debounce";

import {withJustinService} from "../../components/Hoc";
import {
    trackingHistoryClear,
    fetchTrackingHistory
} from "../../actions";
import {DEBOUNCED_SEARCH_WAIT, rootHref} from "../../config/core";
import TrackingControls from "../../components/Tracking/Controls";
import TrackingHistoryViewResult from "../../components/TrackingHistory/ViewResult";

function TrackingHistoryContainer(props) {
    const {number} = props.match.params;
    const [input, setInput] = useState(number);

    useEffect(() => {
        if (props.response === null && typeof number !== "undefined") {
            props.fetchTrackingHistory(`/${number}`);
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

        props.fetchTrackingHistory(
            `/${str}`,
            () => {
                props.history.push(`${rootHref}tracking_history/${str}`);
            },
            () => console.log("modal error tracking_history number!")
        );
      }, DEBOUNCED_SEARCH_WAIT);
  
       /** componentWillUnmount */
       useEffect(() => {
          return () => {
              allClear();
          }
      },[]);
  
      const allClear = () => {
          props.trackingHistoryClear();
      }
  
    return (
        <Fragment>
            <h1 className="w-100 text-center">
                Історія руху відправлення
            </h1>

            <div className="tracking_history_content">
                <TrackingControls value={input} onChange={hundleInput} number={number} />

                {props.loading ? <h2 className="w-100 text-center">Завантаження даних . . .</h2> : null}

                <TrackingHistoryViewResult data={props.response} />
            </div>
        </Fragment>
    );
};

TrackingHistoryContainer.defaultProps = {
    loading: false,
    error: false,
    response: null,
    fetchTrackingHistory: () => console.error("wasn't implement function fetchTrackingHistory"),
    trackingHistoryClear: () => console.error("wasn't implement function trackingHistoryClear")
};

TrackingHistoryContainer.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    response: PropTypes.object,
    fetchTrackingHistory: PropTypes.func,
    trackingHistoryClear: PropTypes.func
};

const mapStateToProps = ({tracking_history}, ownProps) => {
    const {loading, error, response} = tracking_history;
    return {
        loading,
        error,
        response
    };
}

const mapDispachToProps = (dispatch, ownProps) => {
    const {justinService} = ownProps;
    return {
        fetchTrackingHistory: fetchTrackingHistory(justinService, dispatch),
        trackingHistoryClear: () => dispatch(trackingHistoryClear())
    };
}

export default compose(
    withJustinService(),
    connect(mapStateToProps, mapDispachToProps)
)(TrackingHistoryContainer);

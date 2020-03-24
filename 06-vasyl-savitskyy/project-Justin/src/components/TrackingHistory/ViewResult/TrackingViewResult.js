import "./style.scss";

import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TrackingViewResult = (props) => {
    const renderBody = (data) => {
        return data.map((item, index) => {
            if (index !== 0) {
                return (
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.status}</td>
                    </tr>
                );
            }
        })
    }

    const renderTable = (data) => {
        const orderNumber = data[0].orderNumber;
        const orderDescription = data[0].orderDescription;
        return (
            <table className="table table-bordered table-striped branches_table">
                <thead>
                    <tr>
                        <th className="column_4">#</th>
                        <th className="column_4">Від</th>
                        <th className="column_5">Дата</th>
                        <th className="column_4">Час</th>
                        <th className="column_3">Статус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowSpan={data.length}>{orderNumber}</th>
                        <th rowSpan={data.length}>{orderDescription.slice(-9)}</th>
                        <td>{data[0].date}</td>
                        <td>{data[0].time}</td>
                        <td>{data[0].status}</td>
                    </tr>
                    {data.length > 1
                        ? renderBody(data)
                        :null
                    }
                </tbody>
            </table>
        );
    }

    return (
        <div className="table_block tracking_history_response">
            {(props.data !== null && props.data.result)
                ? renderTable(props.data.result)
                : props.data !== null && props.data.msg.code === 10304
                    ? <h6 className="w-100 text-center">{props.data.msg.ua}</h6>
                    : null
            }
        </div>
    );
}

TrackingViewResult.defaultProps = {
    data: null,
    number: ''
};

TrackingViewResult.propTypes = {
    data: PropTypes.object,
    number: PropTypes.string
};

export default TrackingViewResult;

import React, { ReactElement, useState, useEffect } from "react";
import request from "../functions/request";
import RequestInfo from "./RequestInfo";

interface Props {
    order: string,
}

function TrackingInfo(props: Props): ReactElement {
    const [order, setOrder] = useState("");
    const [tracking, setTracking] = useState({ data: null, error: null }  as Data.TrackingData);
    const newOrder = props.order;

    useEffect(() => {
        if (order && order === newOrder) return;

        const method = "tracking";
        const params = "/" + newOrder;
        request({ method, params })
        .then((res: Data.TrackingData) => {
            setOrder(newOrder);
            setTracking(res);
        });
    }, [newOrder]);

    if (order !== newOrder) return null;
        
    const { data, error } = tracking;

    if (!data) {
        return (
            <div className="row justify-content-center">
                <RequestInfo error={error}/>
            </div>
        );
    }

    const trackingInfoMap: Array<[keyof Data.TrackingInfo, string]> = [
        ['orderNumber', 'Замовленя №'],
        ['status', 'Статус'],
        ['date', 'Дата'],
        ['time', 'Час'],
        ['orderDescription', 'Додаткові відомості'],
        ['departmentNumber', 'Відділення №'],
        ['departmentAdress', 'Адреса'],
    ];
    
    
    const body = trackingInfoMap.map(([key, title]) =>
        <tr key={key}>
            <td>{title}</td><td>{data[0][key]}</td>
        </tr>
    );
 
    return (
        <div className="row justify-content-center">
            <div className="tbl_tracking">
                <table>
                    <tbody>
                        {body}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TrackingInfo;

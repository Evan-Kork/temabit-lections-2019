import React, { ReactElement } from "react";
import SERVICES from "../data/services";

interface Props {
    branchInfo: Data.Branch,
}

function getServices(services: Data.Services): string {
    let array = [];
    let service: Data.ServicesNames;
    for (service in services) {
        if (services[service] && SERVICES[service])
            array.push(SERVICES[service]);
    }
    return array.join("; ");
}

function BranchInfo(props: Props): ReactElement {
    const data = props.branchInfo;
    const rows = [
        { key: 'number', data: data.number, title: 'Номер' },
        { key: 'adress', data: data.adress, title: 'Адреса' },
        { key: 'navigation', data: data.public.navigation_ua, title: 'Навігація' },
        { key: 'shedule_description', data: data.shedule_description, title: 'Графік роботи' },
        { key: 'services', data: getServices(data.services), title: 'Сервіси' },
        { key: 'max_weight', data: data.max_weight, title: 'Максимальна вага' },
        { key: 'lat_lng', data: `lat: ${data.lat}; lng: ${data.lng}`, title: 'Координати' },
    ];

    const body = rows.map(({ key, data, title }) =>	(
        <tr key={key}>
            <td>{title}</td>
            <td>{data}</td>
        </tr>
    ));

    return(
        <div className="row justify-content-center">
            <div className="tbl_branch">
                <table>
                    <tbody>
                        {body}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BranchInfo;

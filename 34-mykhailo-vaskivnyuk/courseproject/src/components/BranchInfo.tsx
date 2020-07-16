import React, { ReactElement } from "react";
import SERVICES from "../data/services";

interface Props {
    branch: Data.BranchClass,
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
    const { branch } = props;
    const rows = [
        { key: 'number', data: branch.number, title: 'Номер' },
        { key: 'adress', data: branch.adress, title: 'Адреса' },
        { key: 'navigation', data: branch.navigation_ua, title: 'Навігація' },
        { key: 'shedule_description', data: branch.shedule_description, title: 'Графік роботи' },
        { key: 'services', data: getServices(branch.services), title: 'Сервіси' },
        { key: 'max_weight', data: branch.max_weight, title: 'Максимальна вага' },
        { key: 'lat_lng', data: branch.lat_lng, title: 'Координати' },
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

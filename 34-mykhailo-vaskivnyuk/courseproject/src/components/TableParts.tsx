import React, { ReactElement } from "react";

export function TableHead(): ReactElement {
    return (
        <tr>
            <th>N</th>
            <th>Адреса</th>
            <th>Навігація</th>
            <th>Сервіси</th>
            <th>Графік роботи</th>
        </tr>
    );
}

export function TableBody(data: Data.Branches, from: number, to: number): ReactElement[] {
    return data
        .slice(from, to)
        .map((item, index) =>
            <tr key={item.delivery_branch_id} data-index={index + from} data-number={item.number}>
                <td>{item.number}</td>
                <td>{item.adress}</td>
                <td>{item.navigation_ua}</td>
                <td>Додаткові: {item.strServices}</td>
                <td>{item.shedule_description}</td>
            </tr>
    );
}

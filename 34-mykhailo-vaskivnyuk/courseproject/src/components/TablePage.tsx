import React, { ReactElement } from "react";

const PAGINATION = 50;

function TablePage(data: Data.Branches, page: number): ReactElement[] {
    const index_from = (page - 1) * PAGINATION;
    const index_to = index_from + PAGINATION;
    return data
        .slice(index_from, index_to)
        .map((item, index) =>
            <tr key={item.delivery_branch_id} data-index={index + index_from} data-number={item.number}>
                <td>{item.number}</td>
                <td>{item.adress}</td>
                <td>{item.navigation_ua}</td>
                <td>Додаткові: {item.strServices}</td>
                <td>{item.shedule_description}</td>
            </tr>
    );
}

export default TablePage;

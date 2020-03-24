import React, { useState } from "react";
import PropTypes from "prop-types";

import ModalItem from "./ModalItem";

const TableBranches = (props) => {
    const [showItem, setShowItem] = useState(null);

    const renderItem = (item) => {
        if (item.photos.length) {
            setShowItem(item);
            return;
        }
    }

    const renderServices = (services, title) => {
        if (services.length) {
            return (<>
                <b className="d-block">{title}:</b>
                {services.map((service, ind) => {
                    return (<span key={ind} className="d-block">
                        {service}
                    </span>)
                })}
            </>);
        }
        return;
    }

    return (
        <div
            className="w-100 table_block"
        >
            {showItem
                ? <ModalItem
                    handleModal={() => setShowItem(null)}
                    item={showItem}
                />
                : null
            }

            <table className="table table-bordered table-striped branches_table">
                <thead>
                    <tr>
                        <th className="pl-4 column_1">#</th>
                        <th className="column_2">Адреса відділення</th>
                        <th className="column_3">Навігація</th>
                        <th className="column_4">Сервіси</th>
                        <th className="column_5">Графік роботи</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, index) => {
                        return (
                            <tr key={index}
                                className={`${item.photos.length ? "active_item" : ""}`}
                                onClick={() => renderItem(item)}
                            >
                                <td className="pl-4 column_1">{item.number}</td>
                                <td className="column_2">{item.adress}</td>
                                <td className="column_3">{item.navigation}</td>
                                <td className="column_4">
                                    {renderServices(item.services_o, "Основні")}
                                    {renderServices(item.services_d, "Додаткові")}
                                </td>
                                <td className="column_5">{item.shedule}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

TableBranches.defaultProps = {
    items: [],
};

TableBranches.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]),
};

export default TableBranches;
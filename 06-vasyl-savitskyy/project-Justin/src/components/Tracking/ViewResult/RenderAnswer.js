import React, { Fragment } from "react";
import PropTypes from "prop-types";

import receivedImg from "../../../img/end_success_on.png";
import canceledImg from "../../../img/start_on.png";
import incognitoImg from "../../../img/department_on.png";

const RenderAnswer = (props) => {
    const renderItem = (item) => {
        return (
            <Fragment>
                <h6 className="w-100">{item.title}</h6>
                <div className="text-center">
                    <img
                        src={item.img}
                        alt={item.alt}
                    />
                </div>
                <div className="_info">
                    <p>
                        <b>Дата:</b> <span>{item.date}</span>
                        <br />
                        <span>{item.message}</span>
                    </p>
                </div>
            </Fragment>
        );
    } 

    switch(props.item.status) {
        case "Одержано":
            return renderItem({
                title: "ВІДПРАВЛЕННЯ ВРУЧЕНО",
                alt: "Одержано",
                img: receivedImg,
                date: props.item.date,
                message: "Відправлення отримано. Дякуємо, що скористались Justin!"
            });
        case "Відміна відправки":
            return renderItem({
                title: "Відправку посилки відмінено",
                alt: "Відмінено",
                img: canceledImg,
                date: props.item.date,
                message: null
            });
        default:
            const d = new Date();
            const month = `${(d.getMonth()+1) < 10 ? "0"+(d.getMonth()+1) : d.getMonth()+1}`;
            const date = `${d.getFullYear()}-${month}-${d.getDate()}`;
            return renderItem({
                title: "Вибачте дані відсутні",
                alt: "Дані відсутні",
                img: incognitoImg,
                date,
                message: null
            });;
    }
}

RenderAnswer.defaultProps = {
    item: {
        "orderNumber": null,
        "orderDescription": null,
        "date": "",
        "time": null,
        "status": null,
        "departmentNumber": "",
        "departmentAdress": null
    },
    number: ''
};

RenderAnswer.propTypes = {
    item: PropTypes.object,
    number: PropTypes.string
};

export default RenderAnswer;

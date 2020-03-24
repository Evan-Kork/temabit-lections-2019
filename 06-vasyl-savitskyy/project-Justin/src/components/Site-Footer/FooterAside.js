import React from "react";
import { Link } from "react-router-dom";

import {rootHref} from "../../config/core";

const asides = [
    [
        {title: "Про Justin", href: "pro-kompaniyu"},
        {title: "Карта відділень", href: "viddilennya"},
        {title: "Список відділень", href: "spisok-viddilen"},
        {title: "Розрахунок вартості", href: "rozrahunok-vartosti"}
    ],
    [
        {title: "Тарифи", href: "taryfy"},
        {title: "Умови надання послуг", href: "umovy-nadannya-poslug"},
        {title: "Питання та відповіді", href: "pytannya-ta-vidpovidi"},
        {title: "Укласти договір", href: "informatsiya-dlya-partneriv"}
    ],
    [
        {title: "Наші партнери", href: "partners"},
        {title: "Кредитні посередники", href: "kredytni-poserednyky"},
        {title: "Новини", href: "novyny"},
        {title: "Контакти", href: "kontakty"}
    ]
];

const FooterAside = (props) => {

    return (
        <div className="row">
            {asides.map((aside, index) => {
                return (
                    <div
                        key={index}
                        className={`col-12 col-sm-6 col-md-4 footer_aside ${index === 1 ? "footer_aside__borders" : ""}`}
                    >
                        <aside className="footer_aside_item">
                            <p className="mb-0">
                                {aside.map((item, indx) => {
                                    return (
                                        <Link
                                            key={indx}
                                            to={`${rootHref}${item.href}`}
                                            className="d-block __link"
                                        >{item.title}</Link>
                                    )
                                })}
                            </p>
                        </aside>
                    </div>
                )
            })}
        </div>
    );
}

export default FooterAside;

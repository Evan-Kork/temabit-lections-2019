import "./style.scss";

import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SocialIcons from "../../UI/Socials";
import {rootHref} from "../../../config/core";
import {useOutsideClick} from "../../../hooks";

const menu_items = [
    {title: "Про Justin", to: "pro-kompaniyu", link: true, implemented: false},
    {title: "Карта поштомаркетів (відділень)", to: "viddilennya", link: true, implemented: false},
    {title: "Населенні пункти", to: "localities/all", link: true, implemented: true},
    {title: "Список відділень", to: "branches", link: true, implemented: true},
    {title: "Історія руху відправлення", to: `tracking_history`, link: true, implemented: true},
    {title: "Пошук найближчого відділення", to: `branches_locator`, link: true, implemented: true},
    {title: "Міжнародна доставка", to: "https://international.justin.ua", link: false, implemented: false},
    {title: "Розрахунок вартості відправлення", to: "rozrahunok-vartosti", link: true, implemented: false},
    {title: "Тарифи", to: "taryfy", link: true, implemented: false},
    {title: "Умови надання послуг", to: "umovy-nadannya-poslug", link: true, implemented: false},
    {title: "Питання та відповіді", to: "pytannya-ta-vidpovidi", link: true, implemented: false},
    {title: "Вакансії", to: "vakansiyi", link: true, implemented: false},
    {title: "Укласти договір", to: "informatsiya-dlya-partneriv", link: true, implemented: false},
    {title: "Наші партнери", to: "partners", link: true, implemented: false},
    {title: "Кредитні посередники", to: "kredytni-poserednyky", link: true, implemented: false},
    {title: "Новини", to: "novyny", link: true, implemented: false},
    {title: "Контакти", to: "kontakty", link: true, implemented: false},
]

const NavMenuHeader = (props) => {
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (props.menu) {
            closeMenu();
        }
    });

    const closeMenu = () => {
        props.handleMenu();
    }

    const clockClass = classNames({
        "pb-3": true,
        "d-flex": props.menu,
        "flex-column": props.menu, 
        "nav_menu_header": true
    });

    return (
        <div
            ref={ref}
            className={clockClass}
        >
            <div>
                <span
                    type="button"
                    className="close float-right float-md-left pl-1 pr-1 w-max-c"
                    onClick={closeMenu}
                >&times;</span>
            </div>

            <nav
                className="pl-5 pr-5 overflow-auto flex-grow-1"
            >
                {menu_items.map((item, index) => {
                    const name = (<>
                        {item.title}
                        {item.implemented ? <span className="badge badge-danger badge-pill float-right">+</span> : ""}
                    </>);
                    return ( item.link ?
                        <Link
                            key={index}
                            className="d-block p-2 __link"
                            to={`${rootHref}${item.to}`}
                            onClick={props.handleMenu}
                        >{name}</Link>
                        :
                        <a
                            key={index}
                            href={item.to}
                            className="d-block p-2 __link"
                            target="_blank"
                            rel="noopener noreferrer"
                            title={item.title}
                            onClick={props.handleMenu}
                        >{name}</a>
                    )
                })}
            </nav>
                
            <SocialIcons />
        </div>
    );
};

NavMenuHeader.defaultProps = {
    menu: false,
    handleMenu: () => console.error("wasn't implemented function handleMenu")
};

NavMenuHeader.propTypes = {
    menu: PropTypes.bool,
    handleMenu: PropTypes.func
};

export default NavMenuHeader;

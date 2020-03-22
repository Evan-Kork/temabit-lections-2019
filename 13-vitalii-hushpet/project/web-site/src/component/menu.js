import React from "react";
import { Link } from 'react-router-dom';
function Menu() {
return (
<div id="menu" className="menu">
    <div className="row">
        <div className="col-4"></div>
        <div className="col-4 menu-head">Меню</div>
        <div className="col-4"></div>
    </div>
    <div className="row w-100">
        <div className="col-2"></div>
        <div className="element-menu col-8">
            <Link className="link-menu" to="/">Головна</Link>
        </div>
        <div className="col-2"></div>
        <div className="col-2"></div>
        <div className="element-menu col-8">
            <Link className="link-menu" to="/find">Пошук відправлення</Link>
        </div>
        <div className="col-2"></div>
        <div className="col-2"></div>
        <div className="element-menu col-8">
            <Link className="link-menu" to="/branches_locator">Пошук відділеня</Link>
        </div>
        <div className="col-2"></div>
        <div className="col-2"></div>
        <div className="element-menu col-8">
            <Link className="link-menu" to="/callck">Калькулятор цін</Link>
        </div>
        <div className="col-2"></div>
    </div>
</div>
)
}
export default Menu
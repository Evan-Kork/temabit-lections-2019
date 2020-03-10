import React from "react";
import { Link } from 'react-router-dom';
function Menu() {
    function menuClose() {
        document.getElementById("menu").style.display="none";
    }
return (
<div id="menu" className="menu">
    <div className="row">
        <div className="col-1"></div>
        <button onClick={menuClose} className="exit-menu col-2">X</button>
        <div className="col-9"></div>
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
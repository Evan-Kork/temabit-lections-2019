import "./style.scss";

import React from "react";

import SaytIZIImg from "../../../img/Sayt_IZI.jpg";

const HomeSlider = (props) => {

    return (
        <div id="demo_carousel_home" className="carousel slide" data-ride="carousel">

        <ul className="carousel-indicators">
            <li data-target="#" data-slide-to="0" className="active"></li>
            <li data-target="#" data-slide-to="1"></li>
            <li data-target="#" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="w-100" src={SaytIZIImg} alt="IZI" />
            </div>
        </div>

        <a className="carousel-control-prev" href="#" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#" data-slide="next">
            <span className="carousel-control-next-icon"></span>
        </a>

        </div>
    );
}

export default HomeSlider;

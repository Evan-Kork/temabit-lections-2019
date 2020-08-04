import "./style.scss";

import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import headImg from "../../../img/500_pravka.png";
import fUaGrayImg from "../../../img/logo_f.ua_gray.png";
import mtaImg from "../../../img/mta.png";
import gamershopImg from "../../../img/gameshop_partner.png";
import ukrmodaImg from "../../../img/200x100_ukrmoda.png";
import locationImg from "../../../img/ico-location.png";
import calculatorImg from "../../../img/ico-calculator.png";
import {rootHref} from "../../../config/core";

const HomeContent = (props) => {
    const renderNavItem = (item) => {
        return (
            <Fragment>
                <img src={item.src} alt={item.alt} />
                <h3 className="mt-5 mb-5 w-100 text-center">{item.title}</h3>
                <Link
                    to={item.btnUrl}
                    className={item.btnClass}
                ><b>{item.btnTitle}</b></Link>
            </Fragment>
        );
    }

    return (
        <div className="home_content">
            <div className="container pb-5">
                <div className="row nav_row">
                    <div className="col mr-sm-3 mt-3 mt-sm-0 pt-4 pb-5 bg-white d-flex flex-column align-items-center">
                        {renderNavItem({
                            src: locationImg,
                            alt: "location",
                            title: "Наші відділення",
                            btnUrl: `${rootHref}branches`,
                            btnClass: "btn btn-justin",
                            btnTitle: "ЗНАЙТИ"
                        })}
                    </div>

                    <div className="col ml-sm-3 mt-3 mt-sm-0 pt-4 pb-5 bg-white d-flex flex-column align-items-center">
                        {renderNavItem({
                            src: calculatorImg,
                            alt: "calc",
                            title: "Калькулятор",
                            btnUrl: `${rootHref}`,
                            btnClass: "btn btn-justin",
                            btnTitle: "РОЗРАХУВАТИ ВАРТІСТЬ ВІДПРАВЛЕННЯ"
                        })}
                    </div>
                </div>

                <div className="pt-5 row">
                    <div className="col d-flex justify-content-center">
                        <img className="w-100 ml-3 mr-3" src={headImg} alt="Ми вже працюємо в 500 супермаркетах" />
                    </div>
                    <div className="col-12">
                        <h2 className="mt-5 mb-4 w-100 text-center text-white">НАШІ ПАРТНЕРИ</h2>

                        <div className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col d-none d-lg-block"><img src={fUaGrayImg} alt="1 slide" /></div>
                                        <div className="col d-none d-md-block"><img src={mtaImg} alt="2 slide" /></div>
                                        <div className="col d-none d-sm-block"><img src={gamershopImg} alt="3 slide" /></div>
                                        <div className="col d-flex justify-content-center"><img src={ukrmodaImg} alt="3 slide" /></div>
                                    </div>
                                    <div className="row">
                                        <div className="mt-4 col d-flex justify-content-center">
                                            <span className="mr-3 slider_button"></span>
                                            <span className="mr-3 slider_button active"></span>
                                            <span className="mr-3 slider_button"></span>
                                            <span className="mr-3 slider_button"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;

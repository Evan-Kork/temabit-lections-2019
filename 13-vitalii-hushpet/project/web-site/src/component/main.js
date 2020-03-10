import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Head from './header'
import Footer from './footer'
import Menu from './menu'


function IndexFile() {

    return (
        <div className="main row">
        <Head/>
        <Menu/>

    <div>
        <div id="carouselExampleIndicators" className="carousel slide carousel-main" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="carusel.png" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="carusel.png" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="carusel.png" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
    <div className="center-site row w-100">
        <div className="col-2"></div>
        <div className="col-3 row find">
            <div className="col-4"></div>
            <img className="point-img col-4" src="point.png" />
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="line col-4"></div>
            <div className="col-4"></div>
            <div className="point-txt"><b>Наші відділення</b></div>
            <div className="point-btn col-12"><button type="button" className="btn btn-success "><Link className="link-menu" to="/branches_locator">ЗНАЙТИ</Link></button></div>
        </div>
        <div className="col-1"></div>
        <div className="col-3 row find">
            <div className="col-4"></div>
            <img className="point-img col-4" src="call.png" />
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="line col-4"></div>
            <div className="col-4"></div>
            <div className="point-txt"><b>Калькулятор</b></div>
            <div className="point-btn col-12"><button type="button" className="btn btn-success "><Link className="link-menu" to="/callck">РОЗРАХУВАТИ ВАРТІСТЬ ВІДПРАВЛЕННЯ</Link></button></div>
        </div>
        <div className="col-2"></div>
        <div className="col-12 pravka">
            <img src="500_pravka.png" alt="" />
        </div>
        <div className="col-12 partner">НАШІ ПАРТНЕРИ</div>
        <div className="col-3"></div>
        <div id="carouselExampleControls" className="carousel slide col-6 partner-carusel" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block col-12" src="carusel.png" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block col-12" src="carusel.png" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block col-12" src="carusel.png" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <div className="col-3"></div>
    </div>
    <Footer/>
</div>
    )
};

export default IndexFile
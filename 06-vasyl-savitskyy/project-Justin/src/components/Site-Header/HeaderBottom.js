import React from "react";

import LogoLink from "./LogoLink";
import internationalImg from "../../img/Knopka_Mignarodna_DOSTAVKA.png";
import kabinetImg from "../../img/KABINET.png";

const HeaderBottom = (props) => {

    return (
        <div className="col-12 col-lg-6 order-2 order-lg-1" >
            <div className="row">
                <div className="col d-none d-lg-block">
                    <LogoLink />
                </div>
                <div className="col-12 col-lg-8 d-flex justify-content-between justify-content-lg-around align-items-center">
                    <span>
                        <a
                            href="https://international.justin.ua"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="international"
                        >
                            <img src={internationalImg} className="" alt="international" />
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://my.justin.ua"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="kabinet"
                        >
                            <img src={kabinetImg} className="" alt="kabinet" />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;

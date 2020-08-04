import React from "react";
import { Link } from "react-router-dom";

import {rootHref} from "../../config/core";
import SocialIcons from "../UI/Socials";

const social_icons = [
    {class: "fa fa-facebook", href: "https://www.facebook.com/justinpostservice"},
    {class: "fa fa-instagram", href: "https://instagram.com/justinpostservice"},
    {class: "fa fa-telegram", href: "https://instagram.com/justinpostservice"},
    {class: "fab fa-facebook-messenger", href: "https://m.me/justinpostservice"},
    {class: "fab fa-viber", href: "https://tinyurl.com/justinpostservice"}
];

const FooterBottom = (props) => {

    return (
        <div className="mt-2 row">
            <div className="col-12 col-md-6">
                <div className="row">
                    <div className="col-12 col-md-6">
                        © {1900 + new Date().getYear()} Компанія Justin
                    </div>
                    <SocialIcons />
                </div>
            </div>

            <div className="col-12 col-md-6 text-right">
                <p>
                    <Link
                        className="__link polityka_konfidentsijnosti"
                        to={`${rootHref}polityka-konfidentsijnosti`}
                        target="_blank"
                    >Політика конфіденційності</Link>
                </p>
            </div>
        </div>
    );
};

export default FooterBottom;

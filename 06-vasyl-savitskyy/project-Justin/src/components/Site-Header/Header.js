import "./style.scss";

import React, { useState } from "react";

import HeaderControl from "./HeaderControl";
import HeaderBottom from "./HeaderBottom";
import NavMenuHeader from "../Menu/NavMenuHeader";

const Header = (props) => {
    const [menu, setMenu] = useState(false);

    return (
        <header className="site_header">
            <div className="container">
                <div className="row">
                    <HeaderControl menu={menu} handleMenu={() => setMenu(!menu)} {...props} />

                    <HeaderBottom />
                </div>
            </div>
            <NavMenuHeader menu={menu} handleMenu={() => setMenu(!menu)} />
        </header>
    );
};

export default Header;

import "./style.scss";

import React, { useState } from "react";
import {Helmet} from "react-helmet";

import LayoutMain from "../../containers/Layout/Main";
import HomeContent from "../../components/Home/Content";
import HomeSlider from "../../components/Home/Slider";

function Home(props) {
    const [title, setTitle] = useState("Поштові послуги");
    return (
        <LayoutMain {...props}>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <div className="home">
                <HomeSlider />
                <HomeContent />
            </div>
        </LayoutMain>
    );
};

export default Home;

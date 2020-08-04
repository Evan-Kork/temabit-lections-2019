import React, { useState } from "react";
import {Helmet} from "react-helmet";

import LayoutMain from "../../containers/Layout/Main";

function LoadingComponent(props) {
    const [title, setTitle] = useState(`Завантаження додаткових ресурсів`);

    return (
        <LayoutMain {...props}>
            <Helmet
                defaultTitle={title}
            ></Helmet>

            <div className="container pt-3 pb-3 loading_component">
                <h1>
                    Завантаження додаткового функціоналу ...
                </h1>
            </div>
        </LayoutMain>
    );
};

export default LoadingComponent;

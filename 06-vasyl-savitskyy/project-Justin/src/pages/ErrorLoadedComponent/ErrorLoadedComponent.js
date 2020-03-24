import React, { useState } from "react";
import {Helmet} from "react-helmet";

import LayoutMain from "../../containers/Layout/Main";

function ErrorLoadedComponent(props) {
    const [title, setTitle] = useState(`Помилка завантаження ресурсу`);

    return (
        <LayoutMain {...props}>
            <Helmet
                defaultTitle={title}
            ></Helmet>

            <div className="container pt-3 pb-3 error_loaded_component">
                Помилка при завантаженні додаткового функціоналу ...
            </div>
        </LayoutMain>
    );
};

export default ErrorLoadedComponent;

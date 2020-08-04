import React from "react";
import {Link} from "react-router-dom";

import {rootHref} from "../../../config/core";
import TestLayout from "../../../containers/Test/Layout";

function ErrorLoadedComponent() {

    return (
        <TestLayout>
            <div>
                <h1>Критична помилка</h1>
            </div>
            <div>
                <p>
                    Модуль не завантажено.
                </p>
                <p>
                    <Link to={rootHref} >Home</Link>
                </p>
            </div>
        </TestLayout>
    );
};

export default ErrorLoadedComponent;

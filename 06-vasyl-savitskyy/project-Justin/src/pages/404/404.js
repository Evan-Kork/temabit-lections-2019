import "./style.scss";

import React, { useState } from "react";
import {Helmet} from "react-helmet";
import {connect} from "react-redux";

import LayoutMain from "../../containers/Layout/Main";

function Page404(props) {
    const [title, setTitle] = useState(`Нічого не знайдено для ${props.hash.slice(2)}`);

    return (
        <LayoutMain {...props}>
            <Helmet
                defaultTitle={title}
            ></Helmet>

            <div className="text-center pt-4 pb-4 error404">
                <div className="container">
                    <h1>
                        Сторінка не знайдена
                    </h1>
                    <h2 className="title_404">
                        404
                    </h2>
                </div>
            </div>
        </LayoutMain>
    );
};

const mapStateToProps = ({router: {location}}) => {
    const {hash} = location;
    return {
        hash
    };
}

export default connect(mapStateToProps)(Page404);

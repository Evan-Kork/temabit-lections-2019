import React, {Fragment} from "react";

function ErrorCritical() {

    return (
        <Fragment>
            <div>
                <h1>Критична помилка</h1>
            </div>
            <div>
                <p>
                    Сервіс тимчасово не доступний.
                </p>
            </div>
        </Fragment>
    );
};

export default ErrorCritical;

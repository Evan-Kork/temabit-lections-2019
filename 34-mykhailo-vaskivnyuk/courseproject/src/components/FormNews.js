import React from "react";

class FormNews extends React.Component {

    render() {
        
        dev_log.render(this);
        
        return (
            <div className="row justify-content-center">
                <div className="news_filter">
                    <div>Всі</div>
                    <div>Акції</div>
                    <div>Новини компанії</div>
                </div>
            </div>
        );
    }
}

export default FormNews;

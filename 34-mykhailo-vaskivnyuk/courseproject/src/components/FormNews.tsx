import React, { ReactElement, FormEventHandler } from "react";

interface Props {
    onClick: FormEventHandler,
    type: Data.NewsTypes,
}

function FormNews(props: Props): ReactElement {

    const isActive = (type: Data.NewsTypes) => props.type === type ? "active" : "";

    const filterOption = (type: Data.NewsTypes, caption: string): ReactElement =>
        <span data-type={type} className={isActive(type)}>{caption}</span>;

    return (
        <div className="row justify-content-center" onClick={props.onClick}>
            <div className="news_filter">
                {filterOption("all", "Всі")}
                {filterOption("promotion", "Акції")}
                {filterOption("company_news", "Новини компанії")}
            </div>
        </div>
    );
}

export default FormNews;

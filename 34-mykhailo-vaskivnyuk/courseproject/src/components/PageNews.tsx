import React, { ReactElement, ChangeEvent, EventHandler, useState } from "react";
import news from "../data/news";
import News from "./News";
import ContentHeader from "./ContentHeader";
import FormNews from "./FormNews";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
type EventData = ChangeEvent<HTMLSpanElement> & { 
    target: {
        dataset: {
            type: Data.NewsTypes,
        }
    }
};

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function PageNews(): ReactElement {

    const [type, setType] = useState("all" as Data.NewsTypes);

    const handlerNews: EventHandler<EventData> = (event: EventData) => {
        const { tagName, dataset } = event.target;
        tagName === "SPAN"
            && type !== dataset.type
            && setType(dataset.type);
    }

    const divs = news
        .filter(item => type === "all" || item.type === type)
        .map(item => <News key={item.id} data={item}/>);

    return (
        <React.Fragment>
            <ContentHeader title="Дані про відділення" />
            <FormNews onClick={handlerNews} type={type}/>
            <div className="row news">
                {divs}
            </div>
        </React.Fragment>
    );
}

export default PageNews;

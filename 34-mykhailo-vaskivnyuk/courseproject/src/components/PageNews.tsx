import React, {
    useCallback, useState,
    ReactElement, ChangeEvent, EventHandler,
} from "react";
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
|             FUNCTIONS                                     |
|----------------------------------------------------------*/
const setNewsType = (type: Data.NewsTypes, event: EventData): Data.NewsTypes => {
    const { tagName, dataset } = event.target;
    if (tagName === "SPAN") return dataset.type;
    return type;
};

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function PageNews(): ReactElement {

    const [type, setType] = useState("all" as Data.NewsTypes);

    const handlerNews: EventHandler<EventData> = useCallback(
        (event: EventData) => {
            event.persist();
            setType((type: Data.NewsTypes) => setNewsType(type, event));
        },
        [],
    );

    const divs = news
        .filter(item => type === "all" || item.type === type)
        .map(item => <News key={item.id} data={item}/>);

    return (
        <React.Fragment>
            <ContentHeader title="Новини та акції" />
            <FormNews onClick={handlerNews} type={type}/>
            <div className="row news">
                {divs}
            </div>
        </React.Fragment>
    );
}

export default PageNews;

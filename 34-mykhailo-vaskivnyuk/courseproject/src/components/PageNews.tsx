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
|             COMPONENT                                     |
|----------------------------------------------------------*/
function PageNews(): ReactElement {

    const [type, setType] = useState("all" as Data.NewsTypes);

    const handlerNews: EventHandler<EventData> = useCallback(
        (event: EventData) => {
            const { tagName, dataset } = event.target;
            tagName === "SPAN"
                // && type !== dataset.type
                && setType(type => type !== dataset.type ? dataset.type : type);
    }, []);

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

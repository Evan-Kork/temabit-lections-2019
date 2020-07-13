import React, { useState } from "react";
import news from "../data/news";
import News from "./News";
import ContentHeader from "./ContentHeader";
import FormNews from "./FormNews";

type FormEventData = React.FormEvent & { 
	target: HTMLElement & {
		dataset?: {
			type: Data.NewsTypes,
		}
	}
};

function PageNews(): React.ReactElement {

	const [type, setType] = useState("all" as Data.NewsTypes);

	const handlerNews: React.FormEventHandler = (event: FormEventData) => {
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

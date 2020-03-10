import React from "react";
import news from "../data/news";
import News from "./News";
import ContentHeader from "./ContentHeader";
import FormNews from "./FormNews";

class PageNews extends React.Component {

	render() {

		const divs = news.map((item, index) => {
			return <News key={index} data={item}/>
		});

		return (
			<React.Fragment>
				<ContentHeader title="Дані про відділення" />
				<FormNews />
				<div className="row news">
					{divs}
				</div>
			</React.Fragment>
		);
	}
}

export default PageNews;

import React from "react";
import news from "../data/news";
import News from "./News";
import ContentHeader from "./ContentHeader";
import FormNews from "./FormNews";

class PageNews extends React.Component {

	constructor(props) {
		super(props);
		this.state = {type: "all"};
		this.handlerNews = this.handlerNews.bind(this);
	}

	handlerNews(event) {
		if (event.target.tagName == "SPAN")
			this.setState({type: event.target.dataset.type});
	}

	render() {

		const type = this.state.type;

		const divs = news
			.filter(item => type == "all" || item.type == type)
			.map(item => {
			return <News key={item.id} data={item}/>
		});

		return (
			<React.Fragment>
				<ContentHeader title="Дані про відділення" />
				<FormNews onClick={this.handlerNews} type={type}/>
				<div className="row news">
					{divs}
				</div>
			</React.Fragment>
		);
	}
}

export default PageNews;

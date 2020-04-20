import React from "react";

class News extends React.Component {

	render() {
		const data = this.props.data;

		return(
			<div className="col-12 col-md-6 col-lg-4 news">
				<img src={"../src/imgs/news/" + data.img} />
				<h4>{data.title}</h4>
				<span>{data.date}</span>
				<p>{data.description}</p>
			</div>
		);
	}
}

export default News;

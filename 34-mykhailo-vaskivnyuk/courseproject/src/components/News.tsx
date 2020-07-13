import React from "react";

interface Props {
	data: {
		img: string;
		title: string;
		date: string;
		description: string;
	}
}

function News(props: Props): React.ReactElement {
	const { data } = props;
	const { img, title, date, description } = data;
	return(
		<div className="col-12 col-md-6 col-lg-4 news">
			<img src={"../src/imgs/news/" + img} />
			<h4>{title}</h4>
			<span>{date}</span>
			<p>{description}</p>
		</div>
	);

}

export default News;

import React from "react";

class FormNews extends React.Component {

	render() {
		
		return (
			<div className="row justify-content-center" onClick={this.props.onClick}>
				<div className="news_filter">
					<span data-type="all" className={this.props.type == "all" ? "active" : ""}>Всі</span>
					<span data-type="promotion" className={this.props.type == "promotion" ? "active" : ""}>Акції</span>
					<span data-type="company_news" className={this.props.type == "company_news" ? "active" : ""}>Новини компанії</span>
				</div>
			</div>
		);
	}
}

export default FormNews;

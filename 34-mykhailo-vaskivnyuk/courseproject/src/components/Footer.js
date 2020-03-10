import React from "react";

class Footer extends React.Component {

	render() {
		return (
			<div className="footer wrapper">
				<footer className="container">
					<div className="row links">
						<div className="col-12 col-sm-6 col-md-4 links_block">
							<ul>
								<li><a href="#">Про Justin</a></li>
								<li><a href="#">Карта відділень</a></li>
								<li><a href="#">Список відділень</a></li>
								<li><a href="#">Розрахунок вартості</a></li>
							</ul>
						</div>
						<div className="col-12 col-sm-6 col-md-4 links_block">
							<ul>
								<li><a href="#">Тарифи</a></li>
								<li><a href="#">Умови надання послуг</a></li>
								<li><a href="#">Питання та відповіді</a></li>
								<li><a href="#">Укласти договір</a></li>
							</ul>
						</div>
						<div className="col-12 col-md-4 links_block">
							<ul>
								<li><a href="#">Наші партнери</a></li>
								<li><a href="#">Кредитні посередники</a></li>
								<li><a href="#">Новини</a></li>
								<li><a href="#">Контакти</a></li>
							</ul>
						</div>
					</div>
					<div className="row bottom">
						<div className="col-12 col-md-4 d-none d-sm-block">

						</div>
						<div className="col-12 col-sm-6 col-md-4 d-flex justify-content-start">
							© 2020 Компания Justin
						</div>
						<div className="col-12 col-sm-6 col-md-4 d-flex justify-content-start m-3 m-sm-0">
							<i className="fab fa-facebook-f"></i>
							<i className="fab fa-facebook-messenger"></i>
							<i className="fab fa-telegram"></i>
							<i className="fab fa-instagram"></i>
							<i className="fab fa-viber"></i>
						</div>
					</div>
				</footer>
			</div>
	)};
}

export default Footer;

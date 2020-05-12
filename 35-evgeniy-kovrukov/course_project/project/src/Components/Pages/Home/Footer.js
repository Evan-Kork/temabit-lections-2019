import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import {Link} from 'react-router-dom';

class Footer extends React.Component {
	render() {
		// return (
		// 	<footer className="Footer-component">
		// 		Footer
		// 		<Container>
		// 			<Row>
		// 				<Col>
		// 					<ListGroup>
		// 						<ListGroup.Item>Cras justo odio</ListGroup.Item>
		// 						<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
		// 						<ListGroup.Item>Morbi leo risus</ListGroup.Item>
		// 						<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
		// 						<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
		// 					</ListGroup>
		// 				</Col>
		// 				<Col>
		// 					<ListGroup>
		// 						<ListGroup.Item>Cras justo odio</ListGroup.Item>
		// 						<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
		// 						<ListGroup.Item>Morbi leo risus</ListGroup.Item>
		// 						<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
		// 						<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
		// 					</ListGroup>
		// 				</Col>
		// 				<Col>
		// 					<ListGroup>
		// 						<ListGroup.Item>Cras justo odio</ListGroup.Item>
		// 						<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
		// 						<ListGroup.Item>Morbi leo risus</ListGroup.Item>
		// 						<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
		// 						<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
		// 					</ListGroup>
		// 				</Col>
		// 			</Row>
		// 		</Container>
		// 	</footer>
		// );
		return (
			<div className="nav-list">
				<div className="row justify-content-center">
					<div className="col-8 col-md-4 col-lg-3">
						<ul className="list-unstyled">
							<li>
								<Link to="/">Про Justіn</Link>
							</li>
							<li>
								<Link to="/">Карта вiдділень</Link>
							</li>
							<li>
								<Link to="/">Список вiдділень</Link>
							</li>
							<li>
								<Link to="/">Довідкова інформація</Link>
							</li>
						</ul>
					</div>
					<div className="col-8 col-md-4 col-lg-3">
						<ul className="list-unstyled">
							<li>
								<Link to="/">Тарифи</Link>
							</li>
							<li>
								<Link to="/">Умови надання послуг</Link>
							</li>
							<li>
								<Link to="/">Питання та відповіді</Link>
							</li>
							<li>
								<Link to="/">Укласти договiр</Link>
							</li>
						</ul>
					</div>
					<div className="col-8 col-md-4 col-lg-3">
						<ul className="list-unstyled">
							<li>
								<Link to="/">Нашi партнери</Link>
							</li>
							<li>
								<Link to="/">Кредитнi посередники</Link>
							</li>
							<li>
								<Link to="/">Новини</Link>
							</li>
							<li>
								<Link to="/">Контакти</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;

import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import AddLocationIcon from "@material-ui/icons/AddLocation";

import KeyboardIcon from "@material-ui/icons/Keyboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
class Cards extends React.Component {
	render() {
		return (
			<CardDeck className="d-flex justify-content-center align-items-center" style={{ width: "64rem", margin: "0 auto" }}>
				<Card className=" align-items-center" style={{ width: "18rem" , height: "18rem"}}>
					{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
					<AddLocationIcon color="primary" style={{ fontSize: 60 }} />
					<FontAwesomeIcon icon={faMapMarkerAlt} color="blue" size="4x"/>
					<Card.Body>
						<Card.Title>Наші відділення</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Link to="/branches">
							<Button variant="primary">Знайти</Button>
						</Link>
					</Card.Body>
				</Card>

				<Card className=" align-items-center" style={{ width: "18rem", height: "18rem" }}>
					<KeyboardIcon color="primary" style={{ fontSize: 60 }} />
					<FontAwesomeIcon icon={faCalculator} color="blue" size="4x"/>
					<Card.Body>
						<Card.Title>Калькулятор</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</CardDeck>
		);
	}
}

export default Cards;

{
	/* <AddLocationIcon color="primary" style={{ fontSize: 60 }}/> */
}

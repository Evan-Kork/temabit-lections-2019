import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { InputGroup, FormControl, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./Menu/SideDrawer";

const Navigation = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = value => {
		setDrawerOpen(value);
	};

	return (
		<Container className="Navigation-component">
			<Row className="align-items-center ">
				<Col>
					<Link to="/">
						<Image
							src="https://justin.ua/wp-content/uploads/2019/03/logo_new.png"
							alt="Justin"
						/>
					</Link>
				</Col>
				<Col>
					<Link to="/International">
						<Image src="https://justin.ua/wp-content/uploads/2020/02/Knopka_Mignarodna_DOSTAVKA.png" />
					</Link>
				</Col>
				<Col>
					<Link to="/Account">
						<Image src="https://justin.ua//wp-content/uploads/2020/02/KABINET.png" />
					</Link>
				</Col>

				<Col>
					<a className="text-white" href="tel:12345678">
						0-800-301-661
					</a>
				</Col>

				<Col md={3}>
					<InputGroup>
						{/* <InputGroup.Prepend>
									<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
								</InputGroup.Prepend> */}
						<FormControl
							placeholder="Введiть номер вiдправлення"
							aria-label="TTN"
							aria-describedby="basic-addon1"
						/>
					</InputGroup>
				</Col>
				<Col>
					<IconButton
						aria-label="Menu"
						color="inherit"
						onClick={() => toggleDrawer(true)}
					>
						<MenuIcon color="action" />
					</IconButton>
					<SideDrawer
						open={drawerOpen}
						onClose={value => toggleDrawer(value)}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Navigation;

import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from 'react-router-dom';

const SideDrawer = props => {
	return (
		<Drawer 
			anchor="right"
			open={props.open}
			onClose={() => props.onClose(false)}
		>
			<List component="nav">
				<ListItem button onClick={() => console.log(" About")}>
					<Link to="/about" style={{ textDecoration: 'none' }}>About Justin</Link>
				</ListItem>

				<ListItem button onClick={() => console.log("Start Events Account")}>
					<Link to="/account" style={{ textDecoration: 'none' }}>Account</Link>
				</ListItem>

				<ListItem button onClick={() => console.log("branches")}>
					<Link to="/branches" style={{ textDecoration: 'none' }}>Branches</Link>
				</ListItem>
				
				<ListItem button onClick={() => console.log("Pricing")}>
					Pricing
				</ListItem>

				<ListItem button onClick={() => console.log("Location")}>
					Location
				</ListItem>
			</List>
		</Drawer>
	);
};

export default SideDrawer;

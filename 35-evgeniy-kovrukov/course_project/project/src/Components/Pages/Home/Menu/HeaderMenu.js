import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from './SideDrawer';

const HeaderMenu = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = value => {
		setDrawerOpen(value);
	};
	return (
		<AppBar
			position="fixed"
			style={{
				background: "#090050",
				padding: " 20px 0px"
			}}
		>
			<Toolbar>
				<div className="header_logo">
					<div className="font_left header_logo_title">wmg</div>
					<div className="font_left header_logo_caption">React mitting</div>
				</div>
				<IconButton
					aria-label="Menu"
					color="inherit"
					onClick={() => toggleDrawer(true)}
				>
					<MenuIcon />
				</IconButton>
				<SideDrawer open={drawerOpen} onClose={value => toggleDrawer(value)} />
			</Toolbar>
		</AppBar>
	);
};

export default HeaderMenu;

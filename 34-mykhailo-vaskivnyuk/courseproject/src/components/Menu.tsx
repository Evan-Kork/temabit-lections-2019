import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setMenu } from "../reducer/actions/actions";

interface Props {
	list: Data.Pages,
	selected: Data.Page,
	match: {
		path: string,
	}
	setMenu: (path: string) => void,
}

type EventData = React.FormEvent & { target: HTMLElement };

function Menu(props: Props): React.ReactElement {
	const [isOpened, setOpened] = useState(false);

	const handleMenu: React.FormEventHandler =
		(event: React.FormEvent) => setOpened(!isOpened);

	const handleMenuLink: React.FormEventHandler =
		({ target }: EventData) =>
			target.tagName === "A" && handleMenu(null);

	const { list: menuList, selected, match} = props;
	const { path } = match;

	if ( !selected || ("/" + selected.link) !== path ) {
		props.setMenu(path);
		return null;
	}

	const lis = menuList.map(({ link, id, text }) => (
		<li key={id}>
			<NavLink
				to={"/" + link}
				activeClassName={id === selected.id ? "active" : ""}
				data-id={id}>
				{text}
			</NavLink>
		</li>
	));

	const showSidebar = isOpened ? "show" : "";

	return (
		<div className="menu">
			<div className="menu_open_button" onClick={handleMenu}>
				<i className="fas fa-bars"></i>
			</div>
			<nav className={`sidebar ${showSidebar}`} onClick={handleMenuLink}>
				<div className="menu_close_button" onClick={handleMenu}>
					<i className="fas fa-times"></i>
				</div>
				<ul>
					{lis}																		
				</ul>
			</nav>
		</div>
	);
}

function mapStateToProps (state: Data.State): Data.Menu {
	return state.menu;
}
  
export default withRouter(connect(mapStateToProps, { setMenu })(Menu));

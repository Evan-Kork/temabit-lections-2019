import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setMenu } from "../reducer/actions/actions";

class Menu extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			sidebar_opened: false
		}

		this.handleMenu = this.handleMenu.bind(this);
		this.handleMenuLink = this.handleMenuLink.bind(this);
	}

	handleMenu() {
		const sidebar_opened = !this.state.sidebar_opened;
		this.setState({	sidebar_opened });
	}

	handleMenuLink(event) {
		const target = event.target;
		if (target.tagName == "A") {
			this.handleMenu();
		}
	}

	render() {

		const menuList = this.props.menuList;
		const selected = this.props.selected;
		const path = this.props.match.path;
		if ( !selected || ("/" + selected.link) != path ) {
			this.props.setMenu(path);
			return null;
		}

		const lis = menuList.map( menuItem => {
			
				if (menuItem.id == selected.id) {
					return (
						<li key={menuItem.id}>
							<NavLink to={"/" + menuItem.link} activeClassName="active" data-id={menuItem.id}>{menuItem.text}</NavLink>
						</li>
					);			
				}
				return (
					<li key={menuItem.id}>
						<NavLink to={"/" + menuItem.link} activeClassName="" data-id={menuItem.id}>{menuItem.text}</NavLink>
					</li>
				);
		});

		const show_sidebar = this.state.sidebar_opened ? "show" : "";

		return (
			<div className="menu">
				<div className="menu_open_button" onClick={this.handleMenu}>
					<i className="fas fa-bars"></i>
				</div>
				<nav className={`sidebar ${show_sidebar}`} onClick={this.handleMenuLink}>
					<div className="menu_close_button" onClick={this.handleMenu}>
						<i className="fas fa-times"></i>
					</div>
					<ul>
						{lis}																		
					</ul>
				</nav>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		menuList: state.menu.list,
		selected: state.menu.selected
	}
}
  
export default connect(mapStateToProps, { setMenu })(Menu);

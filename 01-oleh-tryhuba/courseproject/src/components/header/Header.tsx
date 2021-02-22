import React from 'react';
import './header.scss'
import Logo from '../../img/logo_new.png'
import Deliver from '../../img/international_btn.png'
import HeaderSearch from "./header-search/Header-search";
import {NavLink} from "react-router-dom";


type MyState = {
	showNavMenu: boolean
}

type MyProps = {
	readonly title?: string;
}


export default class Header extends React.Component<MyProps, MyState> {


	constructor(props: MyProps) {
		super(props);

		this.state = {
			showNavMenu: false
		};
	}

	showNav = () => {
		this.setState({
			showNavMenu: true
		});
	};
	closeNav = () => {
		this.setState({
			showNavMenu: false
		});
	};

	render() {
		return (
			<div className="row justify-content-between">
				<div className="myClass">${this.props.title}</div>
				<div className="header">
					<div className="header__logo">
						<img src={Logo} alt="logo"/>
					</div>
					<div className="header__deliver">
						<img src={Deliver} alt="deliver"/>
					</div>
					<div className="header__phone">
						<a href="tel:08005005500">08005005500</a>
					</div>
					<HeaderSearch placeholder="Введіть номер відправлення"/>
					<div className="show_nav" onClick={this.showNav}>
						<div className="menu__button">
							<span/>
						</div>
					</div>
					<div className="site_nav" style={this.state.showNavMenu ? {right: 0} : {right: -300}}>
						<div className="close_button">
							<button className="btn btn-primary close_nav" onClick={this.closeNav}>X</button>
						</div>
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink
									className="nav-link"
									exact
									to="/">
									Головна
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/about">
									Про Justin
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/list-of-branches">
									Список відділень
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/tariffs">
									Тарифи
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	};
}

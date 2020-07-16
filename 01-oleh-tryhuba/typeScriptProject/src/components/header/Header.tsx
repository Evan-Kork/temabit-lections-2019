import React, {useState} from 'react';
import './header.scss'
import Logo from '../../img/logo_new.png'
import Deliver from '../../img/international_btn.png'
import {NavLink} from "react-router-dom";


export default function Header() {

	const [showNavMenu, setShowNavMenu] = useState(false)

	const showNav = (e: React.MouseEvent<HTMLDivElement>) => {
		setShowNavMenu(true);
	};
	const closeNav = (e: React.MouseEvent<HTMLButtonElement>) => {
		setShowNavMenu(false);
	};

	return (
		<div className="header">
			<div className="header__logo">
				<img src={Logo} alt="logo"/>
			</div>
			<div className="header__deliver">
				<img src={Deliver} alt="deliver"/>
			</div>
			<div className="header__phone">
				<a href="tel:08005005500">080055500</a>
			</div>
			<div className="show_nav" onClick={showNav}>
				<div className="menu__button">
					<span/>
				</div>
			</div>
			<div className="site_nav" style={showNavMenu ? {right: 0} : {right: -300}}>
				<div className="close_button">
					<button className="btn btn-primary close_nav" onClick={closeNav}>X</button>
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
					<li className="nav-item">
						<NavLink
							className="nav-link"
							to="/search-package">
							Пошук Відправлення
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	)
}

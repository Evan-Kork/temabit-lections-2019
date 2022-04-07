import React from "react";
import Menu from "./Menu";
import { Route } from "react-router-dom";
import FormTrackingHeader from "./FormTrackingHeader";

class Header extends React.Component {

	render() {
		return (
			<div className="header wrapper">
				<header className="container">
					<div className="row">
						<div className="col-6 col-md-6 col-lg-3 logo">
							<img src="../src/imgs/logo_new.png" />
						</div>
						<div className="col-12 col-lg-4 links d-flex justify-content-between">
							<a href="#">
								<img src="../src/imgs/Knopka_Mignarodna_DOSTAVKA.png" />
							</a>
							<a href="#">
								<img src="../src/imgs/KABINET.png" />
							</a>
						</div>
						<div className="col-6 col-md-6 col-lg-5 connection justify-content-between
																			justify-content-md-end">
							<a href="#"><i className="fa fa-phone d-md-none"></i></a>
							<a href="#"><i className="fa fa-search d-md-none"></i></a>
							<span className="phone d-none d-md-inline">0-800-301-661</span>
							<Route path="/" component={FormTrackingHeader} />
							<Route path={[
								"/branches/locality",
								"/branches",
								"/branch",
								"/tracking",
								"/news",
								 "/"
								 ]} component={Menu} />
						</div>
					</div>
				</header>
			</div>
	)};
}

export default Header;

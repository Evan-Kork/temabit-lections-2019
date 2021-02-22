import React from "react";
import HeaderMenu from "../Home/Menu/HeaderMenu";
import '../Home/Menu/HeaderMenu.scss'

class International extends React.Component {
	render() {
		return (
		<div className="InternationalPage-component" style={{ height: "2000px", background: "#BEE0FF"  }}>
			<HeaderMenu />
		</div>
		)
	}
}

export default International;

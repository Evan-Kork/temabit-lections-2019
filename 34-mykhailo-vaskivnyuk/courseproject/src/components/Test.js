import React from "react";
import { setTest, setMenu } from "../reducer/actions/actions";
import { connect } from "react-redux";
//--------------------------------------------------
class Test1 extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let counter = 0;
		const timer = setInterval(() => {
				if (counter == 5) clearInterval(timer);
				this.props.setMenu("Test 1 did mount " + counter++);
			},
			2000);
	}

	render() {
		console.log("test 1 render");
		return <h2>{this.props.test}</h2>
	}
}

function mapStateToProps(state) {
	return {
		test: state.test
	};
}

export const Test1Connected = connect(mapStateToProps, { setMenu })(Test1);

//--------------------------------------------------

class Test2 extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let counter = 15;
		const timer = setInterval(() => {
				if (counter == 12) clearInterval(timer);
				this.props.setTest("Test 2 did mount " + counter--);
			},
			3000
		);
	}

	render() {
		console.log("test 2 render");
		return <h2>{this.props.test}</h2>
	}
}

function mapStateToProps2(state) {
	return {
		test: state.menu.selected
	};
}

export const Test2Connected = connect(mapStateToProps2, { setTest })(Test2);

//--------------------------------------------------

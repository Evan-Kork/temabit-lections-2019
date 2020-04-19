import React from "react";

class FormBranch extends React.Component {

	constructor(props) {
		super(props);
		this.formRef = React.createRef();
	}

	branch() {
		const branch = this.props.branch ? this.props.branch : "";
		this.formRef.current.branch.value = branch;
	}

	componentDidMount() {
		this.branch();
	}

	componentDidUpdate() {
		this.branch();
	}

	render() {
		return (
			<div className="row justify-content-center">
				<div className="branch">
					<form ref={this.formRef} onSubmit={this.props.onSubmit}>
						<input  className="branch_number"
								type="number"
								name="branch"
								placeholder="Введіть номер відділення" />
						<i className="far fa-caret-square-right" onClick={this.props.onSubmit}></i>
					</form>
				</div>
			</div>
		);
	}
}

export default FormBranch;

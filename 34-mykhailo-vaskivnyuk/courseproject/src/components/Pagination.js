import React from "react";

class Pagination extends React.Component {

    render() {
        return (
            <div className="pages" onClick={this.props.onClick}>
                <i className="far fa-caret-square-left" data-direction="prev"></i>
                <span>Page {this.props.page} of {this.props.pages}</span>
                <i className="far fa-caret-square-right" data-direction="next"></i>
            </div>
        );
    }
}

export default Pagination;

{/* <div onClick={this.props.onClick}>
<span data-direction="prev">prev </span>
<span>Page {this.props.page} of {this.props.pages}</span>
<span data-direction="next"> next</span>
</div> */}
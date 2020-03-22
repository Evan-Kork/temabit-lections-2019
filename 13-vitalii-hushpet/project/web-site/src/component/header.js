import React from "react";
import {  Link } from 'react-router-dom';
import Search from './searchforfinder'
import Menu from './menu'


class Head extends React.Component {
	    constructor(props) {
        super(props);

        this.submitNote = this.submitNote.bind(this);

        this.state = {
            userInput: <Menu/>,
            shouldShowElem: false,
        };
    }
    submitNote() {
        if(!this.state.shouldShowElem){
        	this.setState({
            shouldShowElem: true,
        });
        }else{
        this.setState({
            shouldShowElem: false,
        });
        }
    }
		
	render() {
				return (
			<div className="header w-100 col-12 row">
					{this.state.shouldShowElem &&
                <div className="elem">{this.state.userInput}</div>
                }
		<div className="w-100"></div>
		<div className="col-12 row">
			<div className="col-2"></div>
			<div className="col-6">
				<Link to="/"><img className="logo" src="logo_new.png" alt="img"/></Link>
				<Link to="/"><img className="img-nav" src="samolet.png" alt="img"/></Link>
				<Link to="/"><img className="img-nav" src="kabinet.png" alt="img" /></Link>
				<span className="number">0-800-301-661</span>
			</div>
			<div className="col-2">
				<div className="w-100">&nbsp;</div>
				<nav className=" navbar-light bg-light">
					<Search text={"find"}/>
				</nav>
			</div>
			<button className="btn-menu" onClick={this.submitNote}>&#926;</button>
			<div className="col-1"></div>
		</div>
	</div>
		)
	}

}

export default Head

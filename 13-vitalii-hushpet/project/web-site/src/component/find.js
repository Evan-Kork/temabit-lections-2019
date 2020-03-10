import React from "react";
import Head from './header'
import Footer from './footer'
import PaketTrue from './pakettrue'
import PaketFalse from './paketfalse'
import Menu from './menu'

class FindPacket extends React.Component{
 render(){
  var search = this.props.match.params.id.replace(":", "");;
  var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:9998/?url=http://openapi.justin.ua/tracking/'+search, false);
	xhr.send();
	var json = JSON.parse(xhr.responseText);
	if (json.msg==null){
	return (
		<div className="main row">
			<Head/>
			<Menu/>
			<PaketTrue json={json.result[0]}/>
			<Footer/>
		</div>
		)
	}else {
		return (
		<div className="main row">
			<Head/>
			<Menu/>
			<PaketFalse/>
			<Footer/>
		</div>
		)
	}

 }
}
export default FindPacket
import React from "react";
import Head from './header'
import Footer from './footer'
import PaketTrue from './pakettrue'
import PaketFalse from './paketfalse'
var json
class FindPacket extends React.Component {
    UNSAFE_componentWillMount() {
        var search = this.props.match.params.id.replace(":", "");
        json = apiResponse(search);
    }
    render() {
        if (json.msg == null) {
            return (
                <div className="main row">
			<Head/>
			<PaketTrue json={json.result[0]}/>
			<Footer/>
		</div>
            )
        } else {
            return (
                <div className="main row">
			<Head/>
			<PaketFalse/>
			<Footer/>
		</div>
            )
        }

    }
}
export default FindPacket


function apiResponse(search) {
    var tempjson = { msg: 1 }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9998/?url=http://openapi.justin.ua/tracking/' + search, false);
    xhr.send();
    if (xhr.status !== 200) {
        return tempjson;
    } else {
        try {
            var json = JSON.parse(xhr.responseText);
            if (!json.result) {
                return tempjson;
            } else {
                return json;
            }
        } catch (e) {
            return tempjson;
        }

    }
}
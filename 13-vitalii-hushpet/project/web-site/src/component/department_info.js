import React from "react";
import Head from './header'
import Footer from './footer'
import Menu from './menu'
import { Link } from 'react-router-dom';
class DepInfo extends React.Component {
render() {
var search = this.props.match.params.id.replace(":", "");;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:9998/?url=http://openapi.justin.ua/branches/' + search, false);
xhr.send();
var json = JSON.parse(xhr.responseText);
console.log(json);
var googlelink ="https://www.google.com/maps/@"+json.result[0].lat+","+json.result[0].lng+",21z"
console.log(googlelink);

return (
<div className="main row">

    <Head />
    <Menu />
    <div class="row w-100 dep-mine">
        <div className="col-5"></div>
        <div className="col-2 tracking">Інформація</div>
        <div className="col-5"></div>
        <div class="col-4"></div>
        <div class="col-6 row info">
            <table class="table">
                <tbody>
                    <tr class="row">
                        <th scope="row">Номер віділення : </th>
                        <td>{json.result[0].number}</td>
                    </tr>
                    <tr class="row">
                        <th scope="row">Місто : </th>
                        <td>{json.result[0].locality}</td>
                    </tr>
                    <tr class="row">
                        <th scope="row">Адресса : </th>
                        <td>{json.result[0].adress}</td>
                    </tr>
                    <tr class="row">
                        <th scope="row">Графік роботи : </th>
                        <td>{json.result[0].shedule_description}</td>
                    </tr>
                    <tr class="row">
                        <th scope="row">Місце знаходження : </th>
                        <td>{json.result[0].public.navigation_ua}</td>
                    </tr>
                        <tr class="row">
                        <th scope="row">Карти : </th>
                        <td><a href={googlelink} target="_blank">Подивитися на Google Map</a></td>
                    </tr>
                </tbody>
            </table>
                
        </div>
        <div class="col-2"></div>
    </div>
    <Footer />
</div>
)
}
}
export default DepInfo
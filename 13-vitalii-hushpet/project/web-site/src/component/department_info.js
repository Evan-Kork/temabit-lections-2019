import React from "react";
import Head from './header'
import Footer from './footer'
import { Link } from 'react-router-dom';

var json

class DepInfo extends React.Component {
    UNSAFE_componentWillMount() {
        
        json = apiResponse(this.props.match.params.id.replace(":", ""));
    }
    render() {
        var googlelink = `https://www.google.com/maps/@${json.result[0].lat},${json.result[0].lng},21z`;

        return (
            <div className="main row">

    <Head />
    <div className="row w-100 dep-mine">
        <div className="col-5"></div>
        <div className="col-2 tracking">Інформація</div>
        <div className="col-5"></div>
        <div className="col-4"></div>
        <div className="col-6 row info">
            <table className="table">
                <tbody>
                    <tr className="row">
                        <th scope="row">Номер віділення : </th>
                        <td>{json.result[0].number}</td>
                    </tr>
                    <tr className="row">
                        <th scope="row">Місто : </th>
                        <td>{json.result[0].locality}</td>
                    </tr>
                    <tr className="row">
                        <th scope="row">Адресса : </th>
                        <td>{json.result[0].adress}</td>
                    </tr>
                    <tr className="row">
                        <th scope="row">Графік роботи : </th>
                        <td>{json.result[0].shedule_description}</td>
                    </tr>
                    <tr className="row">
                        <th scope="row">Місце знаходження : </th>
                        <td>{json.result[0].public.navigation_ua}</td>
                    </tr>
                        <tr className="row">
                        <th scope="row">Карти : </th>
                        <td><Link to={googlelink} target="_blank">Подивитися на Google Map</Link></td>
                    </tr>
                </tbody>
            </table>
                
        </div>
        <div className="col-2"></div>
    </div>
    <Footer />
</div>
        )
    }
}
export default DepInfo


function apiResponse(search) {
    var tempjson = {
        result: [{ adress: "Помилка запиту", lat: 0, lng: 0, shedule_description: "Помилка запиту", locality: "Помилка запиту", number: "#", public: { navigation_ua: "Помилка запиту" } }]
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9998/?url=http://openapi.justin.ua/branches/' + search, false);
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
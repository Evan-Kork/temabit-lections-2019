import React, {Component} from 'react';

const requestUrl = 'http://api.justin.ua/justin_pms_test/hs/v2/runRequest '
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest()
xhr.open(
    'GET',
    requestUrl,
    true,
    "Exchange",
    "Exchange")
xhr.send()
xhr.onreadystatechange = () => {
    if (xhr.status === 0){
        console.log(xhr.status, 'загрузка')
    }else if(xhr.status === 200) {
        console.log('result', xhr.status, JSON.parse(xhr.responseText))
    }else {
        console.log('err', xhr.status)
    }
}

class Connect extends Component {

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Connect;
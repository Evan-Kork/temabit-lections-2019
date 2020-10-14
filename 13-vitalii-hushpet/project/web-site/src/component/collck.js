import React from 'react';
import Head from './header'
import Footer from './footer'
import OptGen from './option_gen'
var json;
class Callck extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selectStart:"",selectFinish:"",selectWeight:"",selectLegth:"",shouldShowElem:false}
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    handleChange(event) {
        switch (event.target.id) {
            case "selectStart":
                this.setState({ selectStart: event.target.value });
            break;
            case "selectFinish":
                this.setState({ selectFinish: event.target.value });
            break;
            case "selectWeight":
                this.setState({ selectWeight: event.target.value });
            break;
            case "selectLegth":
                this.setState({ selectLegth: event.target.value });
            break;
            default :
            break;
        }
    };
    onClick(){
        if(this.state.selectStart === "" || this.state.selectFinish === "" || this.state.selectWeight ==="" || this.state.selectLegth===""){
            this.setState({ shouldShowElem: false});
        }else{
            this.setState({ shouldShowElem: true});
        }
    }

    UNSAFE_componentWillMount() {
        json = apiResponse();
    }
    render() {
        return (

            <div className="main row w-100">

    <Head />
    <div className="callck row w-100">
        <div className="col-5"></div>
        <div className="col-2 tracking">Колькулятор</div>
        <div className="col-5"></div>
        <div className="col-12 callck-text">Розрахуйте вартість</div>
    </div>
    <div className="row w-100 ">
        <div className="col-2"></div>
        <div className="col-3">
            <select className="selects" value={this.state.value} onChange={this.handleChange} id="selectStart">
                <option value="">Оберіт Місто</option>
            {
               json.result.map(todo=>{
               return <OptGen todo={todo} key={todo.uuid}/>
               }) 
            }
            </select>
        </div>
        <div className="col-1"></div>
        <div className="col-3">            
            <select className="selects" value={this.state.value} onChange={this.handleChange} id="selectFinish">
                <option value="">Оберіт Місто</option>
            {
               json.result.map(todo=>{
               return <OptGen todo={todo} key={todo.uuid}/>
               }) 
            }

            </select>
        </div>
        <div className="col-3"></div>
        <div className="w-100"> &nbsp;</div>
        <div className="w-100"> &nbsp;</div>
        <div className="col-2"></div>
        <div className="col-3">
            <select className="selects" value={this.state.value} onChange={this.handleChange} id="selectWeight">
                <option value="">Оберіт вагу</option>
                <option value="1">До 1 Кг</option>
                <option value="10">До 10 Кг</option>
                <option value="100">До 100 Кг</option>
                <option value="500">До 500 Кг</option>
            </select>
        </div>
        <div className="col-1"></div>
        <div className="col-3">            
            <select className="selects" value={this.state.value} onChange={this.handleChange} id="selectLegth">
                <option value="">Оберіт розрір</option>
                <option value="30">До 30 см</option>
                <option value="60">До 60 см</option>
                <option value="90">До 90 см</option>
                <option value="150">До 1.5 м</option>
            </select></div>
        <div className="col-3"></div>
    </div>
    <div className="col-12 callck-btn">
        <button type="button" onClick={this.onClick} className="btn btn-outline-success">Розрахувати</button>
    </div>

    <div className="col-12" id="res">
        {this.state.shouldShowElem &&
            <div className="elem">За обраними Вами характеристиками вартість доставки буде складати: { Math.floor(Math.random() * 1000) } гривень"</div>
        }
    </div>
    <Footer/>
</div>
        )
    }
}
export default Callck


function apiResponse() {
    var tempjson = { result: [{ title_ua: "Помилка запиту" }] }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9998/?url=http://openapi.justin.ua/localities/', false);
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
import React from 'react';
import Head from './header'
import Footer from './footer'
import Menu from './menu'
import OptGen from './option_gen'
function Callck() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9998/?url=http://openapi.justin.ua/localities', false);
    xhr.send();
    var json = JSON.parse(xhr.responseText);
    var arrayLocation= json.result

return (

<div className="main row w-100">

    <Head />
    <Menu />
    <div className="callck row w-100">
        <div className="col-5"></div>
        <div className="col-2 tracking">Колькулятор</div>
        <div className="col-5"></div>
        <div className="col-12 callck-text">Розрахуйте вартість</div>
    </div>
    <div className="row w-100 ">
        <div className="col-2"></div>
        <div className="col-3">
            <select className="selects" id="select-start">
                <option value="">Оберіт Місто</option>
            {
               arrayLocation.map(todo=>{
               return <OptGen todo={todo} key={todo.uuid}/>
               }) 
            }
            </select>
        </div>
        <div className="col-1"></div>
        <div className="col-3">            
            <select className="selects" id="select-finish">
                <option value="">Оберіт Місто</option>
            {
               arrayLocation.map(todo=>{
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
            <select className="selects" id="select-weight">
                <option value="">Оберіт вагу</option>
                <option value="1">До 1 Кг</option>
                <option value="10">До 10 Кг</option>
                <option value="100">До 100 Кг</option>
                <option value="500">До 500 Кг</option>
            </select>
        </div>
        <div className="col-1"></div>
        <div className="col-3">            
            <select className="selects" id="select-legth">
                <option value="">Оберіт розрір</option>
                <option value="30">До 30 см</option>
                <option value="60">До 60 см</option>
                <option value="90">До 90 см</option>
                <option value="150">До 1.5 м</option>
            </select></div>
        <div className="col-3"></div>
    </div>
    <div className="col-12 callck-btn">
        <button type="button" onClick={onClick} className="btn btn-outline-success">Розрахувати</button>
    </div>
    <div className="col-12" id="res"></div>
    <Footer/>
</div>
)
}
function onClick() {
    if (document.getElementById("select-legth").value !== ""&&document.getElementById("select-weight").value !== ""&&document.getElementById("select-start").value !== ""&&document.getElementById("select-finish").value !== ""){ 
        document.getElementById("res").innerText ="За обраними Вами характеристиками вартість доставки буде складати: "+ Math.floor(Math.random()*1000) + " гривень"
    }
    else{
        document.getElementById("res").innerText = "Поля для кого робив вибирай давай"        
    }
} 
export default Callck
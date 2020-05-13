import React from 'react';
import Container from "react-bootstrap/Container";
import styles from '../tracker.module.css'
import Col from "react-bootstrap/Col";
import {createStore} from "redux";
import {calcaculate} from "../../../redux/Calculate";

const store = createStore(calcaculate).getState()
const city = store.City.map(element => <option key={element} value={element} name={element}>{element}</option>)
const length = store.length.map(element => <option key={element} value={element} name={element}>до {element} см</option>)
const weight = store.weight.map(element => <option key={element} value={element} name={element}>до {element} кг</option>)

class Calc extends React.Component {
    inputChangeHandler = event =>{
        event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name]:event.target.value
        }}))
    }
        render(){
        return (
            <Container>
                    <form className={styles.form} onClick={this.inputChangeHandler}>
                        <Col>
                            <label htmlFor="from">Звідки:</label>
                            <select className="custom-select" id='from'>
                                <option defaultValue disabled="disabled">Оберіть місто</option>
                                {city}
                            </select>
                            <label htmlFor="weight">Вага:</label>
                            <select className="custom-select" id="weight">
                                <option defaultValue disabled="disabled">Оберіть вагу</option>
                                {weight}
                            </select>
                        </Col>
                        <Col>
                            <label htmlFor="to">Куди:</label>
                            <select className="custom-select" id="to">
                                <option defaultValue disabled="disabled">Оберіть місто</option>
                                {city}
                            </select>
                            <label htmlFor="length">Довжина:</label>
                            <select className="custom-select" id="length">
                                <option defaultValue disabled="disabled">Оберіть довжину</option>
                                {length}
                            </select>
                        </Col>
                    </form>
                <button className={styles.btnSucces + " btn btn-success"} type="submit">Розрахувати вартість</button>
            </Container>
        )}
}

export default Calc
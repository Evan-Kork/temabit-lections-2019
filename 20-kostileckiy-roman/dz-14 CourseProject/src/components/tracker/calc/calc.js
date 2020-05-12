import React from 'react';
import Container from "react-bootstrap/Container";
import styles from '../tracker.module.css'
import Col from "react-bootstrap/Col";
import {createStore} from "redux";
import {rootReducer} from "../../../redux/rootReducer";

class Calc extends React.Component {
        render(){
        return (
            <Container>
                    <form className={styles.form}>
                        <Col>
                            <label htmlFor="from">Звідки:</label>
                            <select className="custom-select" id='from'>
                                <option defaultValue disabled="disabled">Оберіть місто</option>
                                {createStore(rootReducer).getState()
                                        .CalculateCostSending.City
                                            .map(element =><option key={element} value={element}>{element}</option> )}
                            </select>
                            <label htmlFor="weight">Вага:</label>
                            <select className="custom-select" id="weight">
                                <option defaultValue disabled="disabled">Оберіть вагу</option>
                                {createStore(rootReducer)
                                    .getState().CalculateCostSending.weight
                                    .map(element => <option value={element}>до {element} кг</option>)}
                            </select>
                        </Col>
                        <Col>
                            <label htmlFor="to">Куди:</label>
                            <select className="custom-select" id="to">
                                <option defaultValue disabled="disabled">Оберіть місто</option>
                                {createStore(rootReducer).getState()
                                    .CalculateCostSending.City
                                    .map(element =><option value={element}>{element}</option> )}
                            </select>
                            <label htmlFor="length">Довжина:</label>
                            <select className="custom-select" id="length">
                                <option defaultValue disabled="disabled">Оберіть довжину</option>
                                {createStore(rootReducer).getState()
                                    .CalculateCostSending.length
                                    .map(element => <option value={element}>до {element} см</option>)}
                            </select>
                        </Col>
                    </form>
                <button className={styles.btnSucces + " btn btn-success"} type="submit">Розрахувати вартість</button>
            </Container>
        )}
}

export default Calc
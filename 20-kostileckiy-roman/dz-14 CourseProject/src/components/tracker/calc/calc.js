import React from 'react';
import Container from "react-bootstrap/Container";
import styles from '../tracker.module.css'
import Col from "react-bootstrap/Col";
import {createStore} from "redux";
import {calcaculate} from "../../../redux/Calculate";



class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore(calcaculate).getState()
        this.city = this.store.City.map(element => <option key={element} value={element} name={element}>{element}</option>)
        this.length = this.store.length.map(element => <option key={element} value={element} name={element}>до {element} см</option>)
        this.weight = this.store.weight.map(element => <option key={element} value={element} name={element}>до {element} кг</option>)
    }

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
                            <label htmlFor="from">{this.store.LABELS.FROM}</label>
                            <select className="custom-select" id='from'>
                                <option defaultValue disabled="disabled">{this.store.OPTIONS.FROM}</option>
                                {this.city}
                            </select>
                            <label htmlFor="weight">{this.store.LABELS.WEIGHT}</label>
                            <select className="custom-select" id="weight">
                                <option defaultValue disabled="disabled">{this.store.OPTIONS.WEIGHT}</option>
                                {this.weight}
                            </select>
                        </Col>
                        <Col>
                            <label htmlFor="to">{this.store.LABELS.TO}</label>
                            <select className="custom-select" id="to">
                                <option defaultValue disabled="disabled">{this.store.OPTIONS.TO}</option>
                                {this.city}
                            </select>
                            <label htmlFor="length">{this.store.LABELS.LENGH}</label>
                            <select className="custom-select" id="length">
                                <option defaultValue disabled="disabled">{this.store.OPTIONS.LENGH}</option>
                                {this.length}
                            </select>
                        </Col>
                    </form>
                <button className={styles.btnSucces + " btn btn-success"} type="submit">Розрахувати вартість</button>
            </Container>
        )}
}

export default Calc
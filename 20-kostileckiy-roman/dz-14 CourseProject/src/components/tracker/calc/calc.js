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
                            <label htmlFor={this.store.LABELS.FROM.ID}>{this.store.LABELS.FROM.TEXT}</label>
                            <select className="custom-select" id={this.store.LABELS.FROM.ID} key={this.store.LABELS.FROM.ID}>
                                <option defaultValue disabled="disabled">{this.store.OPTIONS.FROM}</option>
                                {this.city}
                            </select>
                            <label htmlFor={this.store.LABELS.WEIGHT.ID}>{this.store.LABELS.WEIGHT.TEXT}</label>
                            <select className="custom-select"id={this.store.LABELS.WEIGHT.ID} key={this.store.LABELS.WEIGHT.ID}>
                                <option defaultValue disabled="disabled">{this.store.OPTIONS.WEIGHT}</option>
                                {this.weight}
                            </select>
                        </Col>
                        <Col>
                            <label htmlFor={this.store.LABELS.TO.ID}>{this.store.LABELS.TO.TEXT}</label>
                            <select className="custom-select" id={this.store.LABELS.TO.ID} key={this.store.LABELS.TO.ID}>
                                <option defaultValue disabled="disabled">{this.store.OPTIONS.TO}</option>
                                {this.city}
                            </select>
                            <label htmlFor={this.store.LABELS.LENGH.ID}>{this.store.LABELS.LENGH.TEXT}</label>
                            <select className="custom-select" id={this.store.LABELS.LENGH.ID} key={this.store.LABELS.LENGH.ID}>
                                <option defaultValue disabled="disabled">{this.store.OPTIONS.LENGH}</option>
                                {this.length}
                            </select>
                        </Col>
                    </form>
                <button className={styles.btnSucces + " btn btn-success"} type={this.store.BTN.TYPE}>{this.store.BTN.TEXT}</button>
            </Container>
        )}
}

export default Calc
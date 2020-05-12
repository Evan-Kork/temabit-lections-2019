import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styles from '../tracker.module.css'
import FormControl from "react-bootstrap/FormControl";
import {connect} from 'react-redux';

// Не закончил :C 

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title:''}
    }

    submitHandler = event =>{
        event.preventDefault()
        const {title} = this.state;
        const newPost = {
            title, id:Date.now().toString()
        }
        console.log(newPost)
    }
    changeInputHandler = event =>{
        event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name] : event.target.value
        }}))
    }

        render(){
        return (
            <Container>
                <Row>
                    <form onSubmit={this.submitHandler}>
                        <Row>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={this.state.title}
                                name="title"
                                placeholder="Оберіть місто"
                                onChange={this.changeInputHandler}
                            />
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={this.state.title}
                                name="title"
                                placeholder="Оберіть місто"
                                onChange={this.changeInputHandler}
                            />
                        </Row>



                        <button className="btn btn-success" type="submit">Розрахувати вартість</button>
                    </form>
                </Row>

            </Container>
        )}
}

const mapStateToProps = state => {
    return {
        sender: state.CalculateCostSending.senderCity,
        recipient: state.CalculateCostSending.recipientCity,
        weight: state.CalculateCostSending.weight,
        length: state.CalculateCostSending.length
    }
}
console.log()
export default connect(mapStateToProps, null)(Calc)
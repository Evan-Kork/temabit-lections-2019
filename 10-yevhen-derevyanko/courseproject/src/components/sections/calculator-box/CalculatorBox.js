import React from 'react';
import './style/style-calculator.scss';
import calculateDelivery from './script/calc-delivery';


class CalculatorBox extends React.Component{
    constructor(props) {
        super(props);

        this.selectCityFirst = React.createRef();
        this.selectCitySecond = React.createRef();
        this.selectWeight = React.createRef();
        this.selectLength = React.createRef();

        this.state = {
            firstCity:null,
            secondCity:null,
            weight:null,
            length:null,
            resCalc: null
        }
    }

    handleChange = (event) =>{
        let targetName = event.target.name;
        let targetIndex = event.target.selectedIndex;
        this.setState({
            [targetName]: targetIndex
        });
    }

    calcDelivery = () =>{
        let resCalcDelivery = calculateDelivery(this.state);
        this.setState({resCalc: resCalcDelivery});
    } 

    render(){
        let dataCalc = this.props.calcData;
        let dataLocalities = this.props.dataLocalities.listLocalities;
        return (
            <div className="column column-calculator">
                <div className="title-calc">
                    {dataCalc.subTitle} 
                </div>
                <div className="box-calc">
                    <div className="line line-input">
                        <div className="item-input">
                            <label htmlFor="first-city" className="label-for-select">Звідки:</label>
                            <select onChange={this.handleChange} ref={this.selectCityFirst} name="firstCity" id="first-city">
                                <option value={null}>Оберіть місто</option>
                                {dataLocalities.map(elem => {
                                    return <option key={`first-city-${elem.uuid}`} value={elem.uuid}>{elem.title_ua}</option>                                
                                })}
                            </select>
                        </div>
                        <div className="item-input">
                            <label htmlFor="second-city" className="label-for-select">Куди:</label>
                            <select onChange={this.handleChange} ref={this.selectCitySecond} name="secondCity" id="second-city">
                                <option value={null}>Оберіть місто</option>
                                {dataLocalities.map(elem => {
                                    return <option key={`second-city-${elem.uuid}`} value={elem.uuid}>{elem.title_ua}</option>                                
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="line line-input">
                        <div className="item-input">
                            <label htmlFor="weight" className="label-for-select">Вага:</label>
                            <select onChange={this.handleChange} ref={this.selectWeight} name="weight" id="weight">
                                <option value={null}>Оберіть вагу</option>
                                {dataCalc.weight.map(elem => {
                                    return <option key={`weight-${elem.name}`} value={elem.value}>{elem.name}</option>                                
                                })}
                            </select>
                        </div>
                        <div className="item-input">
                            <label htmlFor="length" className="label-for-select">Довжина:</label>
                            <select onChange={this.handleChange} ref={this.selectLength} name="length" id="length">
                                <option value={null}>Оберіть довжину</option>
                                {dataCalc.length.map(elem => {
                                    return <option key={`length-${elem.name}`} value={elem.value}>{elem.name}</option>                                
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="line line-btn-calc">
                        <input type="button" onClick={this.calcDelivery} className="calc-delivery" value="Розрахувати вартість"/>
                    </div>

                    {this.state.resCalc != null  &&(
                        <div className="line line-result">
                            За обраними Вами характеристиками вартість доставки буде складати: <strong> {this.state.resCalc} </strong> гривень
                        </div>)
                    }
                </div>
            </div>
        );
    }
}
export default CalculatorBox;
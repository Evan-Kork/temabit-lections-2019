import React from 'react';

import { connect } from 'react-redux';
import { getLocalities } from '../../../actions/actionLocalities';

import TitlePage from '../../sections/title-page/Title-page';
import CalculatorBox from '../../sections/calculator-box/CalculatorBox';
import Preloader from '../../sections/preloader/Preloader';

class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titlePage: 'Калькулятор',
            calculatorData: {
                subTitle: 'Розрахуйте вартість',
                weight : [
                    {name:"до 0.5 кг (XS)", value:0.5},
                    {name:"до 1 кг (S)", value:1},
                    {name:"до 2 кг (M)", value:2},
                    {name:"до 5 кг (L)", value:5},
                    {name:"до 10 кг (XL)", value:10},
                    {name:"до 15 кг (XXL)", value:15},
                    {name:"до 30 кг (XXXL)", value:30}
                ],
                length : [
                    {name:"до 40 см", value:40},
                    {name:"до 60 см", value:60},
                    {name:"до 90 см", value:90}
                ]
            }
        };
    }


    componentDidMount() {
        if(!this.props.localities.loaded){
            this.props.getDataLocalities('/localities');
        }
    }
    render(){
        let localities = this.props.localities;
        if (!localities.loaded) {
            return <Preloader/>;
        }
        return (
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <TitlePage title={this.state.titlePage}/>
                            <CalculatorBox calcData={this.state.calculatorData} dataLocalities={localities}/>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

const mapStateToProps = state => ({
    localities: state.localities,
});
const mapDispatchToProps = dispatch => ({
    getDataLocalities: url => dispatch(getLocalities(url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
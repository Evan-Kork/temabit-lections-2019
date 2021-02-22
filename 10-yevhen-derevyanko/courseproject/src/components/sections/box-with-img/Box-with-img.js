import React from 'react';

import './style/style-box-with-img.scss';


class BoxImg extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="box-img">
                            <img src={this.props.boxImg} />
                        </div>
                    </div>
                </div>  
            </div>      
        )
    }
}
export default BoxImg;
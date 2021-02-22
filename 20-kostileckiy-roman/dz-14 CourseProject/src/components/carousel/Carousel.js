import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import {createStore} from "redux";
import {carousel} from "../../redux/CarouselReducer";

class MainCarousel extends Component {
    constructor(props) {
        super(props);
        this.controlledCarousel = ()=>{
            this.setIndex = 0;
            this.handleSelect = (selectIndex, e) =>{
                this.setIndex(selectIndex)
            }
        }
        this.store = createStore(carousel).getState()
    }
    render() {
        return (
            <div>
                <Carousel activeIndex={this.index} onSelect={this.controlledCarousel} indicators={false} fade={true}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.store.SLIDERS.SLIDE_1.IMG}
                            alt={this.store.SLIDERS.SLIDE_1.TEXT}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.store.SLIDERS.SLIDE_2.IMG}
                            alt={this.store.SLIDERS.SLIDE_2.TEXT}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.store.SLIDERS.SLIDE_3.IMG}
                            alt={this.store.SLIDERS.SLIDE_3.TEXT}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default MainCarousel;
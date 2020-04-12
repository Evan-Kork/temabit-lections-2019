import React from 'react';

import Slider from "react-slick";
import './style/slider-style.scss';


class SlickSlider extends React.Component{
    render(){
        let dataSlider = this.props.dataSlider;
        return (
            <section className="slider-section">
                {dataSlider.title.length > 0 &&
                    <h3>{dataSlider.title}</h3>
                }
                <Slider {...dataSlider.settings}>
                    {Object.keys(dataSlider.data).map((elem, i ) => {
                        let subSlide = Object.keys(dataSlider.data[elem]).map((elemSub, subIter ) => {
                            return <a key={`key-${i}-${subIter}`} href={dataSlider.data[elem][elemSub].link}>
                                        <img src={dataSlider.data[elem][elemSub].imgName} alt={dataSlider.data[elem][elemSub].imgName} />
                                    </a>;
                        });
                        return <div key={`${dataSlider.settings.className}-${elem}`} className="item-slide">{subSlide}</div>;
                    })}
                </Slider> 
            </section>
        )
    }
}
export default SlickSlider;
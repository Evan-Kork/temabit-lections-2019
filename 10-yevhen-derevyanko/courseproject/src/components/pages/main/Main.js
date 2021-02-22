import React from 'react';

import SlickSlider from '../../sections/slider/Slider';
import SectionBg from '../../sections/section-with-backround/Section-with-bg';




import Kasta_for_sayt from '../../../uploads/Kasta_for_sayt.jpg';
import Banner_sayt_Samolet from '../../../uploads/Banner_sayt_Samolet__4.png';
import PARFUMS from '../../../uploads/PARFUMS.png';
import BanerResajz from '../../../uploads/Baner-resajz.jpg';


import fon_new from '../../../uploads/fon_new_28_02_2019.jpg';



class Main extends React.Component{
    render(){
        let propsSliderLg = {
            title: '',
            data: {
                item1:{
                    subItem1:{
                        link: '#',
                        imgName: Kasta_for_sayt
                    }
                },
                item2:{
                    subItem1:{
                        link: '#',
                        imgName: Banner_sayt_Samolet
                    },
                },
                item3:{
                    subItem1:{
                        link: '#',
                        imgName: PARFUMS
                    },
                },
                item4:{
                    subItem1:{
                        link: '#',
                        imgName: BanerResajz
                    },
                }
            },
            settings:{
                className: "promotion-slider",
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true
            }
        };
        return (
            <article>
                <SlickSlider dataSlider={propsSliderLg} />
                <SectionBg bgSection={fon_new} />
            </article>
        );
    }
}
export default Main;
import React from 'react';

import './style/style-section-with-bg.scss';

import BoxImg from "../box-with-img/Box-with-img";
import OurOffices from "../our-services/Our-services";
import SlickSlider from "../slider/Slider";

import pravka_500 from '../../../uploads/500_pravka.png';

import uplataLogo from '../../../uploads/uplata-logo-250x200-1.png';
import AVON from '../../../uploads/AVON.png';
import LogoNew from '../../../uploads/Logo-new-01.png';
import logo3_final from '../../../uploads/logo3_final.png';
import logo_fua_gray from '../../../uploads/logo_f.ua_gray.png';
import gameshop_partner from '../../../uploads/gameshop_partner.png';
import dualism_logo from '../../../uploads/dualism_logo.png';



class SectionBg extends React.Component{
    render(){
        let ourOffices = {
            icon:'<i class="fas fa-map-marker-alt"></i>',
            title:'Наші відділення',
            linkTitle:'ЗНАЙТИ',
            linkUrl:'/viddilennya',
        };
        let calculator = {
            icon:'<i class="fas fa-calculator"></i>',
            title:'Калькулятор',
            linkTitle:'РОЗРАХУВАТИ ВАРТІСТЬ ВІДПРАВЛЕННЯ',
            linkUrl:'/rozrahunok-vartosti',
        }

        let propsSliderSm = {
            title: 'НАШІ ПАРТНЕРИ',
            data: {
                item1:{
                    subItem1:{
                        link: '#',
                        imgName: uplataLogo
                    },
                    subItem2:{
                        link: '#',
                        imgName: logo_fua_gray
                    },
                    subItem3:{
                        link: '#',
                        imgName: dualism_logo
                    },
                    subItem4:{
                        link: '#',
                        imgName: LogoNew
                    },
                },
                item2:{
                    subItem1:{
                        link: '#',
                        imgName: gameshop_partner
                    },
                    subItem2:{
                        link: '#',
                        imgName: uplataLogo
                    },
                    subItem3:{
                        link: '#',
                        imgName: logo_fua_gray
                    },
                    subItem4:{
                        link: '#',
                        imgName: uplataLogo
                    },
                },
                item3:{
                    subItem1:{
                        link: '#',
                        imgName: AVON
                    },
                    subItem2:{
                        link: '#',
                        imgName: uplataLogo
                    },
                    subItem3:{
                        link: '#',
                        imgName: dualism_logo
                    },
                    subItem4:{
                        link: '#',
                        imgName: uplataLogo
                    },
                },
                item4:{
                    subItem1:{
                        link: '#',
                        imgName: LogoNew
                    },
                    subItem2:{
                        link: '#',
                        imgName: logo3_final
                    },
                    subItem3:{
                        link: '#',
                        imgName: gameshop_partner
                    },
                    subItem4:{
                        link: '#',
                        imgName: logo3_final
                    },
                },
            },
            settings:{
                className: "partners-slider",
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true,
            }
        };
        return (
            <section className="slider-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="line line-box">
                                <OurOffices  dataService={ourOffices} />
                                <OurOffices dataService={calculator} />
                            </div>
                        </div>    
                    </div>    
                </div>    
                <img src={this.props.bgSection} alt="" />

                <BoxImg boxImg={pravka_500} />

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SlickSlider dataSlider={propsSliderSm} />
                        </div>    
                    </div>    
                </div>
                
            </section>
        )
    }
}
export default SectionBg;
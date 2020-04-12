import React from 'react';
import './style/style-footer.scss';
import SocialLinks from '../sections/social-links/SocialLinks';
import { NavLink } from "react-router-dom";

class Footer extends React.Component{
    render(){
        let socialLinksParams = {
            type: 'lg',
            list: {
                item1: ['fa-facebook-f','https://www.facebook.com/justinpostservice'],
                item2: ['fa-instagram','https://instagram.com/justinpostservice'],
                item3: ['fa-telegram','https://t.me/justinpostservice_bot'],
                item4: ['fa-facebook-messenger','https://m.me/justinpostservice'],
                item5: ['fa-viber','https://tinyurl.com/justinpostservice'],
            }
        }

        let navFootCol1 = [
            ['#','Про Justin'],
            ['/viddilennya','Карта відділень'],
            ['/spisok-viddilen','Список відділень'],
            ['/rozrahunok-vartosti','Розрахунок вартості'],
        ];
        let navFootCol2 = [
            ['#','Тарифи'],
            ['#','Умови надання послуг'],
            ['#','Питання та відповіді'],
            ['#','Укласти договір'],
        ];
        let navFootCol3 = [
            ['#','Наші партнери'],
            ['#','Кредитні посередники'],
            ['#','Новини'],
            ['#','Контакти'],
        ];
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="line line-footer-nav">
                                <nav className="foot-nav">
                                    <ul>
                                        {navFootCol1.map(elem => {
                                            return <li key={`navAside-1-${elem[1]}`}><NavLink to={elem[0]}>{elem[1]}</NavLink></li>
                                        })}
                                    </ul>
                                </nav>       
                                <nav className="foot-nav">
                                    <ul>
                                        {navFootCol2.map(elem => {
                                            return <li key={`navAside-2-${elem[1]}`}><NavLink to={elem[0]}>{elem[1]}</NavLink></li>
                                        })}
                                    </ul>
                                </nav>       
                                <nav className="foot-nav">
                                    <ul>
                                        {navFootCol3.map(elem => {
                                            return <li key={`navAside-3-${elem[1]}`}><NavLink to={elem[0]}>{elem[1]}</NavLink></li>
                                        })}
                                    </ul>
                                </nav>
                            </div>       
                        </div>
                        <div className="col-12">
                            <div className="line second-line-footer">
                                <p className="copyright">© 2020 Компания Justin</p>
                                <SocialLinks nav={socialLinksParams}/>
                                <a className="policy" href="#">Політика конфіденційності</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;
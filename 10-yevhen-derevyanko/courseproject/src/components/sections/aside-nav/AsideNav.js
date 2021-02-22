import React from 'react';
import './style/aside-style.scss';
import { NavLink } from "react-router-dom";

import { connect } from 'react-redux';
import { actionAsside } from '../../../actions/actionAsside';

import SocialLinks from '../social-links/SocialLinks';

class AsideNav extends React.Component{

    closeAssideNavigation = () =>{
        this.props.actionAsside('hidden');
    }

    render(){
        let navAside = [
            ['#','Про Justin'],
            ['/viddilennya','Карта поштомаркетів (відділень)'],
            ['/spisok-viddilen','Список відділень'],
            ['#','Міжнародна доставка'],
            ['/rozrahunok-vartosti','Розрахунок вартості відправлення'],
            ['#','Тарифи'],
            ['#','Умови надання послуг'],
            ['#','Питання та відповіді'],
            ['#','Вакансії'],
            ['#','Укласти договір'],
            ['#','Наші партнери'],
            ['#','Кредитні посередники'],
            ['#','Новини'],
            ['#','Контакти'],
        ];
        let socialLinksParams = {
            type: 'sm',
            list: {
                item1: ['fa-facebook-f','https://www.facebook.com/justinpostservice'],
                item2: ['fa-instagram','https://instagram.com/justinpostservice'],
                item3: ['fa-telegram','https://t.me/justinpostservice_bot'],
                item4: ['fa-facebook-messenger','https://m.me/justinpostservice'],
                item5: ['fa-viber','https://tinyurl.com/justinpostservice'],
            }
        }

        return (
            <div className={`aside-container ${this.props.assideStatus}`}>
                <button type="button" className="close-aside-nav" onClick={this.closeAssideNavigation}><span></span><span></span></button>
                <nav className="aside-nav">
                    <ul>
                        {navAside.map(elem => {
                            return <li key={`navAside${elem[1]}`}><NavLink to={elem[0]}>{elem[1]}</NavLink></li>
                        })}
                    </ul>
                </nav>
                <SocialLinks nav={socialLinksParams}/>
            </div>
        )
    }
}

export default connect(state => ({
    assideStatus: state.assideStatus,
}), {actionAsside})(AsideNav);


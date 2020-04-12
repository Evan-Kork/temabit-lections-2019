import React from 'react';
import './style/social-links-style.scss';
import '@fortawesome/fontawesome-free/js/all.min.js';

class SocialLinks extends React.Component{
    render(){
        let social = this.props.nav;
        return (
           <nav className={`social-list type-social-list-${social.type}`}>
               <ul>
                   {Object.keys(social.list).map(elem => {
                        return <li key={social.list[elem][0]}><a href={social.list[elem][1]}><i className={`fab ${social.list[elem][0]}`}></i></a></li>;
                    })}
               </ul>
           </nav>
        )
    }
}
export default SocialLinks;
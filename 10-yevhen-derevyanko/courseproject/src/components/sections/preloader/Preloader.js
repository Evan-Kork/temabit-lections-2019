import React from 'react';
import './style/style-preloader.scss';
import '@fortawesome/fontawesome-free/js/all.min.js';

class Preloader extends React.Component{
    render(){
        return (
            <div className="box-preloader">
                <i className="fas fa-sync"></i>
            </div>
        );
    }
}
export default Preloader;